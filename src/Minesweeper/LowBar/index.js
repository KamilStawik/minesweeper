import { useSelector, useDispatch } from "react-redux";
import { selectDifficultyLevel, selectGameStatus } from "./../minesweeperSlice";
import { LowBarWrapper, DificultyLevelButton } from "./styled";

const LowBar = () => {
    const difficulty = useSelector(selectDifficultyLevel);
    const gameStatus = useSelector(selectGameStatus);
    const dispatch = useDispatch();

    return (
        <LowBarWrapper>
            <DificultyLevelButton>Beginner</DificultyLevelButton>
            <DificultyLevelButton>Intermediate</DificultyLevelButton>
        </LowBarWrapper>
    );
};

export default LowBar;