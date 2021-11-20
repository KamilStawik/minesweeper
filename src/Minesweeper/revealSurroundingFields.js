const revealSurroundingFields = (grid, index) => {

    const clickedFieldCoordinates = grid[index].coordinates;

    let idsFieldsToReveal = [];
    let idsAlreadyChecked = [];

    const generateDependantFields = (fieldCoordinates) => {

        return [
            field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row - 1,
            field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row - 1,
            field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row - 1,
            field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row,
            field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row,
            field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row + 1,
            field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row + 1,
            field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row + 1,
        ]
    };

    const checkHandler = (id) => {
        let checked = 0;
        const fieldCoordinates = grid[id].coordinates;
        const dependantFields = generateDependantFields(fieldCoordinates);

        dependantFields.forEach(dependantField => {
            const targetIndex = grid.findIndex(dependantField);
            targetIndex === -1 && checked++;
            targetIndex !== -1 && idsFieldsToReveal.includes(targetIndex) && checked++;
        });

        return checked;
    };

    const findFieldsToReveal = (fieldCoordinates) => {
        const dependantFields = generateDependantFields(fieldCoordinates);

        dependantFields.forEach(dependantField => {
            const targetIndex = grid.findIndex(dependantField);
            if (idsAlreadyChecked.includes(targetIndex)) {
                return;
            } else {
                idsAlreadyChecked.includes(targetIndex) || idsAlreadyChecked.push(targetIndex);
                targetIndex !== -1 && !idsFieldsToReveal.includes(targetIndex) && idsFieldsToReveal.push(targetIndex);
                (targetIndex !== -1 && grid[targetIndex].surroundingMines === 0 && checkHandler(targetIndex, dependantFields) !== 8)
                    && findFieldsToReveal(grid[targetIndex].coordinates);
            };
        });
    };

    findFieldsToReveal(clickedFieldCoordinates);

    return idsFieldsToReveal;
};

export default revealSurroundingFields;