import { useSelector } from "react-redux"
import { selectDifficultyLevel } from "./minesweeperSlice";
import Grid from "./Grid"
import TopBar from "./TopBar";
import { Wrapper } from "./styled";
import LowBar from "./LowBar";
import ScoreBoard from "./ScoreBoard";

const Minesweeper = () => {

    const difficultyLevel = useSelector(selectDifficultyLevel);

    return (
        <Wrapper difficultyLevel={difficultyLevel}>
            <TopBar />
            <Grid />
            <LowBar />
            <ScoreBoard />
        </Wrapper >
    );
};

export default Minesweeper;