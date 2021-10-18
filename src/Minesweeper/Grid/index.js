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
                    number={gridField.id}
                    bomb={gridField.bomb}
                    reviled={gridField.reviled}
                    marked={gridField.marked}
                />))}

        </GridWrapper>

    );
};

export default Grid;