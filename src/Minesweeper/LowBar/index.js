import { useDispatch } from "react-redux";
import { LowBarWrapper, DificultyLevelButton } from "./styled";
import { setNewDifficultyLevel } from "./../minesweeperSlice";

const LowBar = () => {
    const dispatch = useDispatch();

    return (
        <LowBarWrapper>
            <DificultyLevelButton onClick={() => dispatch(setNewDifficultyLevel("beginner"))}>Beginner</DificultyLevelButton>
            <DificultyLevelButton onClick={() => dispatch(setNewDifficultyLevel("intermediate"))}> Intermediate</DificultyLevelButton>
        </LowBarWrapper >
    );
};

export default LowBar;