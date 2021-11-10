import { useSelector, useDispatch } from "react-redux";
import { newGameButtonClick, selectDifficultyLevel, selectFlaggedFieldsQuantity, selectGameStatus } from "./../minesweeperSlice";
import { difficultyLevels } from "./../consts";
import { NewGameButton, TopBarWrapper, Wrapper } from "./styled";
import Timer from "./Timer";

const TopBar = () => {
    const difficulty = useSelector(selectDifficultyLevel);
    const gameStatus = useSelector(selectGameStatus);
    const flaggedFieldsQuantity = useSelector(selectFlaggedFieldsQuantity);
    const dispatch = useDispatch();

    const difficultyLevelsIndex = difficultyLevels.findIndex(difficultyLevel => difficultyLevel.name === difficulty);
    const minesQuantity = difficultyLevels[difficultyLevelsIndex].minesQuantity;
    const minesLeft = minesQuantity - flaggedFieldsQuantity;

    return (
        <TopBarWrapper>
            <Wrapper>
                🚩: {minesLeft}
            </Wrapper>
            <NewGameButton onClick={() => dispatch(newGameButtonClick())}>
                {gameStatus === "won" ? "😎" : gameStatus === "lost" ? "😖" : "😀"}
            </NewGameButton>
            <Wrapper>
                <Timer />
            </Wrapper>
        </TopBarWrapper>
    );
};

export default TopBar;