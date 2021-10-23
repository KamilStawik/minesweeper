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
    // this function is now checking if there is a mine on previos gridField!
    grid.forEach(gridField => {

        var currentSurroundingMines = 0;
        const currentColumn = gridField.coordinates.column;
        const currentRow = gridField.coordinates.row;
        const trgetIndex = grid.findIndex(gridField => gridField.coordinates.column === currentColumn - 1 && gridField.coordinates.row === currentRow);

        trgetIndex === -1
            ?
            gridField.surroundingMines = currentSurroundingMines
            :
            grid[trgetIndex].mine === true ? gridField.surroundingMines = currentSurroundingMines + 1 : gridField.surroundingMines = currentSurroundingMines;
    });



    // grid.forEach(gridField => {
    //     const determiningFields = [-6, -5, -4, -1, 1, 4, 5, 6]
    //     const index = gridField.id;
    //     var currentSurroundingMines = 0;

    //     determiningFields.forEach(determiningField => {

    //         if (grid[index + determiningField]) {
    //             if (grid[index + determiningField].mine === true) {
    //                 currentSurroundingMines = currentSurroundingMines + 1
    //             };
    //         } else { currentSurroundingMines = currentSurroundingMines };
    //         return currentSurroundingMines;
    //     });
    //     gridField.surroundingMines = currentSurroundingMines;
    // });



    console.log(grid);
    return (grid);
};

export default getGrid;



// });
// const index = state.grid.findIndex(field => field.id === id);
// state.grid[index].fieldNumber = (
//     (state.grid[index - 6] ? (state.grid[index - 6].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index - 5] ? (state.grid[index - 5].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index - 4] ? (state.grid[index - 4].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index - 1] ? (state.grid[index - 1].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index + 1] ? (state.grid[index + 1].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index + 4] ? (state.grid[index + 4].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index + 5] ? (state.grid[index + 5].bomb === true ? 1 : 0) : 0)
//     +
//     (state.grid[index + 6] ? (state.grid[index + 6].bomb === true ? 1 : 0) : 0)
// );
// };
