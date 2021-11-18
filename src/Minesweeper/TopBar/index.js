import { useSelector, useDispatch } from "react-redux";
import { newGameButtonClick, selectDifficultyLevel, selectGameStatus, selectGrid } from "./../minesweeperSlice";
import { difficultyLevels } from "./../consts";
import Timer from "./Timer";
import {
    NewGameButton,
    TopBarWrapper,
    FlagWrapper,
    FlagIcon,
    AngryFaceIcon,
    HappyFaceIcon,
    LikeABossFaceIcon
} from "./styled";

const TopBar = () => {
    const difficulty = useSelector(selectDifficultyLevel);
    const gameStatus = useSelector(selectGameStatus);
    const grid = useSelector(selectGrid);
    const dispatch = useDispatch();

    const countFlaggedFields = () => {
        let flaggedField = 0;
        grid.forEach(gridField => gridField.markedAsMine === true && flaggedField++);
        return flaggedField
    };

    const flaggedFieldsQuantity = countFlaggedFields();
    const difficultyLevelsIndex = difficultyLevels.findIndex(difficultyLevel => difficultyLevel.name === difficulty);
    const minesQuantity = difficultyLevels[difficultyLevelsIndex].minesQuantity;
    const minesLeft = minesQuantity - flaggedFieldsQuantity;

    return (
        <TopBarWrapper>
            <FlagWrapper>
                <FlagIcon alt="🚩" /> : {minesLeft}
            </FlagWrapper>
            <NewGameButton onClick={() => dispatch(newGameButtonClick())}>
                {gameStatus === "won" ? <LikeABossFaceIcon alt="😎" />
                    : gameStatus === "lost" ? <AngryFaceIcon alt="😖" />
                        : <HappyFaceIcon alt="😀" />}
            </NewGameButton>
            <Timer />
        </TopBarWrapper>
    );
};

export default TopBar;