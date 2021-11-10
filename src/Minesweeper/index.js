import { useSelector } from "react-redux"
import { selectDifficultyLevel } from "./minesweeperSlice";
import Grid from "./Grid"
import TopBar from "./TopBar";
import { Wrapper } from "./styled";
import LowBar from "./LowBar";

const Minesweeper = () => {

    const difficultyLevel = useSelector(selectDifficultyLevel);

    return (
        <Wrapper difficultyLevel={difficultyLevel}>
            <TopBar />
            <Grid />
            <LowBar />
        </Wrapper >
    );
};

export default Minesweeper;