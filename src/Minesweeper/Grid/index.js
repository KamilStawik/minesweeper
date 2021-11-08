import { useSelector } from "react-redux"
import { GridWrapper } from "./styled";
import Field from "./Field";
import { selectGrid } from "./../minesweeperSlice";

const Grid = () => {
    const grid = useSelector(selectGrid);

    return (
        <GridWrapper>
            {grid.map(gridField =>
            (<Field
                key={gridField.id}
                id={gridField.id}
                mine={gridField.mine}
                coordinates={gridField.coordinates}
                surroundingMines={gridField.surroundingMines}
                revealed={gridField.revealed}
                markedAsMine={gridField.markedAsMine}
            />))}
        </GridWrapper>
    );
};

export default Grid;