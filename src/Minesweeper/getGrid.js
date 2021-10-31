const getGrid = (difficultyLevel) => {

    const grid = [];

    let fieldsQuantity = 0;
    let minesQuantity = 0;
    let columnsQuantity = 0;

    switch (difficultyLevel) {
        case 'beginner':
            fieldsQuantity = 64;
            minesQuantity = 10;
            columnsQuantity = 8;
            break;
        case 'intermediate':
            fieldsQuantity = 256;
            minesQuantity = 40;
            columnsQuantity = 16;
            break;
    };

    const initiateGrid = () => {
        for (var i = 0; i < fieldsQuantity; i++) {

            var column = (i === 0 ? 1 : (column === columnsQuantity ? 1 : column = column + 1));
            var row = (i === 0 ? 1 : (i % columnsQuantity === 0 ? row = row + 1 : row));

            grid.push(
                {
                    id: i,
                    revealed: false,
                    mine: Math.random(),
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
    };

    const setMinesOnGrid = () => {

        var minesIndexs = [];

        for (var j = 0; j < minesQuantity; j++) {

            var max = grid[0].mine;
            var maxIndex = 0;

            for (var k = 1; k < grid.length; k++) {
                if (grid[k].mine > max && grid[k].mine !== true) {
                    maxIndex = k;
                    max = grid[k].mine;
                }
            }
            grid[maxIndex].mine = 0;
            minesIndexs.push(maxIndex);
        }
        grid.map((field) => minesIndexs.includes(field.id) ? field.mine = true : field.mine = false);
    };

    const setSurroundingMinesNumber = () => {
        grid.forEach(gridField => {

            var currentSurroundingMines = 0;
            const currentColumn = gridField.coordinates.column;
            const currentRow = gridField.coordinates.row;
            const incrementCurrentSurroundingMines = () => currentSurroundingMines = currentSurroundingMines + 1;

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
                const targetIndex = grid.findIndex(determiningField);
                targetIndex !== -1 && grid[targetIndex].mine === true && incrementCurrentSurroundingMines();
            });
            gridField.surroundingMines = currentSurroundingMines;
        });
    };

    initiateGrid();
    setMinesOnGrid();
    setSurroundingMinesNumber();

    console.log(grid);
    return (grid);
};

export default getGrid;