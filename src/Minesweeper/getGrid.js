const getGrid = () => {

    const fieldsQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


    var grid = [];

    var len = fieldsQuantity.length;
    for (var i = 0; i < len; i++) {
        grid.push(
            {
                id: fieldsQuantity[i],
                reviled: false,
                bomb: !!`${Math.random() > 0.8 ? 1 : ""}`,
                marked: false,
            }
        );
    };

    console.log(grid);
    return (grid);
};

export default getGrid;