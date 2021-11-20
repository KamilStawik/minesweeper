const revealSurroundingFields = (grid, index) => {

    const clickedFieldCoordinates = grid[index].coordinates;

    let idsFieldsToReveal = [];
    let idsAlreadyCheced = [];

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

        console.log(checked);
        return checked;

    };


    const findFieldsToReveal = (fieldCoordinates) => {
        const dependantFields = generateDependantFields(fieldCoordinates);

        // const dependantFields = [
        //     field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row - 1,
        //     field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row - 1,
        //     field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row - 1,
        //     field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row,
        //     field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row,
        //     field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row + 1,
        //     field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row + 1,
        //     field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row + 1,
        // ];

        dependantFields.forEach(dependantField => {
            const targetIndex = grid.findIndex(dependantField);
            if (idsAlreadyCheced.includes(targetIndex)) {
                return
            } else {
                idsAlreadyCheced.includes(targetIndex) || idsAlreadyCheced.push(targetIndex);
                console.log(idsFieldsToReveal);
                console.log(targetIndex);
                targetIndex !== -1 && !idsFieldsToReveal.includes(targetIndex) && idsFieldsToReveal.push(targetIndex);
                (targetIndex !== -1 && grid[targetIndex].surroundingMines === 0 && checkHandler(targetIndex, dependantFields) !== 8) && findFieldsToReveal(grid[targetIndex].coordinates);
            };
        });
    };

    findFieldsToReveal(clickedFieldCoordinates);

    //&& !(idsFieldsToReveal.includes(targetIndex))

    console.log(`do ujawnienia ${idsFieldsToReveal}`);
    console.log(`już sprawdzone ${idsAlreadyCheced}`);

    //const targetIndex = grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row - 1);
    //grid[targetIndex1].surroundingMines === 0 && idsFieldsToReveal.push(targetIndex1);


    // const findFieldsToReveal = () => {
    //     const targetIndex1 = grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row - 1);
    //     grid[targetIndex1].surroundingMines === 0 && idsFieldsToReveal.push(targetIndex1);
    //     console.log(idsFieldsToReveal);
    // };

    // findFieldsToReveal();

    //     if (grid[payload].surroundingMines === 0) {
    //         const fieldCoordinates = yield grid[payload].coordinates;

    //         //how to make some loop for this?
    //         const targetIndex1 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row - 1);
    //         yield grid[payload].surroundingMines === 0 && targetIndex1 !== -1 && grid[targetIndex1].revealed === false && (put(leftClick(targetIndex1)));
    //         const targetIndex2 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row - 1);
    //         yield grid[payload].surroundingMines === 0 && targetIndex2 !== -1 && grid[targetIndex2].revealed === false && (put(leftClick(targetIndex2)));
    //         const targetIndex3 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row - 1);
    //         yield grid[payload].surroundingMines === 0 && targetIndex3 !== -1 && grid[targetIndex3].revealed === false && (put(leftClick(targetIndex3)));
    //         const targetIndex4 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row);
    //         yield grid[payload].surroundingMines === 0 && targetIndex4 !== -1 && grid[targetIndex4].revealed === false && (put(leftClick(targetIndex4)));
    //         const targetIndex5 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row);
    //         yield grid[payload].surroundingMines === 0 && targetIndex5 !== -1 && grid[targetIndex5].revealed === false && (put(leftClick(targetIndex5)));
    //         const targetIndex6 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column - 1 && field.coordinates.row === fieldCoordinates.row + 1);
    //         yield grid[payload].surroundingMines === 0 && targetIndex6 !== -1 && grid[targetIndex6].revealed === false && (put(leftClick(targetIndex6)));
    //         const targetIndex7 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column && field.coordinates.row === fieldCoordinates.row + 1);
    //         yield grid[payload].surroundingMines === 0 && targetIndex7 !== -1 && grid[targetIndex7].revealed === false && (put(leftClick(targetIndex7)));
    //         const targetIndex8 = yield grid.findIndex(field => field.coordinates.column === fieldCoordinates.column + 1 && field.coordinates.row === fieldCoordinates.row + 1);
    //         yield grid[payload].surroundingMines === 0 && targetIndex8 !== -1 && grid[targetIndex8].revealed === false && (put(leftClick(targetIndex8)));
    //     };
    // }

    return idsFieldsToReveal;

};

export default revealSurroundingFields;