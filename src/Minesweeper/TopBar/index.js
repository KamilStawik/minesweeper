import { useSelector, useDispatch } from "react-redux";
import { newGameButtonClick, selectDifficultyLevel, selectFlaggedFieldsQuantity, selectGameStatus, selectGrid } from "./../minesweeperSlice";
import { difficultyLevels } from "./../consts";
import { NewGameButton, TopBarWrapper, Wrapper } from "./styled";
import Timer from "./Timer";

const TopBar = () => {
    const difficulty = useSelector(selectDifficultyLevel);
    const gameStatus = useSelector(selectGameStatus);
    //const flaggedFieldsQuantity = useSelector(selectFlaggedFieldsQuantity);

    const countFlaggedFields = () => {
        let flaggedField = 0;
        grid.forEach(gridField => gridField.markedAsMine === true && flaggedField++);
        return flaggedField
    };

    const grid = useSelector(selectGrid);
    const flaggedFieldsQuantity = countFlaggedFields();

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