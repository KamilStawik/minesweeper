const getGrid = () => {

    const fieldsQuantity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

    var grid = [];

    const len = fieldsQuantity.length;
    for (var i = 0; i < len; i++) {

        var column = (i === 0 ? 1 : (column === 5 ? 1 : column = column + 1));
        var row = (i === 0 ? 1 : (i % 5 === 0 ? row = row + 1 : row));

        grid.push(
            {
                id: i,
                reviled: false,
                mine: !!`${Math.random() > 0.8 ? 1 : ""}`,
                markedAsMine: false,
                surroundingMines: "auto",
                coordinates:
                {
                    column,
                    row,
                }
            }
        );
    }

    grid.forEach(gridField => {

        var currentSurroundingMines = 0;
        const currentColumn = gridField.coordinates.column;
        const currentRow = gridField.coordinates.row;

        const determiningFields = [
            gridField => gridField.coordinates.column === currentColumn - 1 && gridField.coordinates.row === currentRow - 1,
            gridField => gridField.coordinates.column === currentColumn && gridField.coordinates.row === currentRow - 1,
            gridField => gridField.coordinates.column === currentColumn + 1 && gridField.coordinates.row === currentRow - 1,
            gridField => gridField.coordinates.column === currentColumn - 1 && gridField.coordinates.row === currentRow,
            gridField => gridField.coordinates.column === currentColumn + 1 && gridField.coordinates.row === currentRow,
            gridField => gridField.coordinates.column === currentColumn - 1 && gridField.coordinates.row === currentRow + 1,
            gridField => gridField.coordinates.column === currentColumn && gridField.coordinates.row === currentRow + 1,
            gridField => gridField.coordinates.column === currentColumn + 1 && gridField.coordinates.row === currentRow + 1,
        ];

        determiningFields.forEach(determiningField => {
            const trgetIndex = grid.findIndex(determiningField);

            trgetIndex === -1
                ?
                gridField.surroundingMines = currentSurroundingMines
                :
                grid[trgetIndex].mine === true ? currentSurroundingMines = currentSurroundingMines + 1 : currentSurroundingMines = currentSurroundingMines;
        });
        gridField.surroundingMines = currentSurroundingMines;
    });

    console.log(grid);
    return (grid);
};

export default getGrid;