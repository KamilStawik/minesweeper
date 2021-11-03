import { useSelector, useDispatch } from "react-redux";
import { newGameButtonClick, selectDifficultyLevel, selectFlaggedFieldsQuantity } from "../minesweeperSlice";
import { difficultyLevels } from "../consts";
import { TopBarWrapper } from "./stylex";
import Timer from "./Timer";

const TopBar = () => {
    const difficulty = useSelector(selectDifficultyLevel);
    const flaggedFieldsQuantity = useSelector(selectFlaggedFieldsQuantity);
    const dispatch = useDispatch();

    const difficultyLevelsIndex = difficultyLevels.findIndex(difficultyLevel => difficultyLevel.name === difficulty);
    const minesQuantity = difficultyLevels[difficultyLevelsIndex].minesQuantity;

    const minesLeft = minesQuantity - flaggedFieldsQuantity;

    return (
        <TopBarWrapper>
            mines left: {minesLeft}
            <button onClick={() => dispatch(newGameButtonClick())}>
                Czas start / stop
            </button>
            <Timer />
        </TopBarWrapper>
    );
};

export default TopBar;