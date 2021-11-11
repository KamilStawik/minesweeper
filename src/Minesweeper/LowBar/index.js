import { useDispatch, useSelector } from "react-redux";
import { LowBarWrapper, DifficultyLevelButton } from "./styled";
import { selectDifficultyLevel, setNewDifficultyLevel } from "./../minesweeperSlice";

const LowBar = () => {
    const difficultyLevel = useSelector(selectDifficultyLevel);
    const dispatch = useDispatch();

    return (
        <LowBarWrapper>
            <DifficultyLevelButton
                buttonDifficultyLevel={"beginner"}
                difficultyLevel={difficultyLevel}
                onClick={() => dispatch(setNewDifficultyLevel("beginner"))}
            >
                Beginner
            </DifficultyLevelButton>
            <DifficultyLevelButton
                buttonDifficultyLevel={"intermediate"}
                difficultyLevel={difficultyLevel}
                onClick={() => dispatch(setNewDifficultyLevel("intermediate"))}
            >
                Intermediate
            </DifficultyLevelButton>
            <DifficultyLevelButton
                buttonDifficultyLevel={"expert"}
                difficultyLevel={difficultyLevel}
                onClick={() => dispatch(setNewDifficultyLevel("expert"))}
            >
                Expert
            </DifficultyLevelButton>
        </LowBarWrapper >
    );
};

export default LowBar;