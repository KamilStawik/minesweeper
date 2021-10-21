import { useSelector } from "react-redux"
import { GridWrapper } from "./styled";
import Field from "../../common/Field";
import { selectGrid } from "../minesweeperSlice";

const Grid = () => {

    const grid = useSelector(selectGrid);

    return (

        <GridWrapper>

            {grid.map(gridField =>
            (<Field
                key={gridField.id}
                id={gridField.id}
                mine={gridField.mine}
                reviled={gridField.reviled}
                markedAsMine={gridField.markedAsMine}
                fieldNumber={gridField.fieldNumber || 0}
            />))}

        </GridWrapper>

    );
};

export default Grid;