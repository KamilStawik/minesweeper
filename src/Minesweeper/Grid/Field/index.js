import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    rightClick,
    revealSurroundingFields,
    leftClick,
    selectGameStatus,
    selectDifficultyLevel
} from "./../../minesweeperSlice";
import { StyledField } from "./styled";

const Field = ({ id, mine, coordinates, revealed, markedAsMine, markedAsQuestion, surroundingMines }) => {
    const dispatch = useDispatch();
    const gameStatus = useSelector(selectGameStatus);
    const difficultyLevel = useSelector(selectDifficultyLevel);

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(leftClick(id));
            surroundingMines === 0 && dispatch(revealSurroundingFields(coordinates));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            revealed === false && dispatch(rightClick(id));
        }
    };

    useEffect(() => {
        revealed === true && surroundingMines === 0 && dispatch(revealSurroundingFields(coordinates));
        // eslint-disable-next-line
    }, [revealed]);

    return (
        <StyledField
            mine={mine}
            revealed={revealed}
            lost={gameStatus === "lost"}
            won={gameStatus === "won"}
            difficultyLevel={difficultyLevel}
            surroundingMines={surroundingMines}
            onClick={gameStatus !== "lost" && gameStatus !== "won" ? clickHandler : undefined}
            onContextMenu={gameStatus !== "lost" && gameStatus !== "won" ? clickHandler : undefined}
        >
            {revealed && mine === false && (surroundingMines === 0 ? "" : surroundingMines)}
            {revealed && mine && "💣"}
            {!revealed && markedAsMine && gameStatus === "gameIsOn" && "🚩"}
            {!revealed && markedAsQuestion && gameStatus === "gameIsOn" && "❓"}
        </StyledField>
    );
};

export default Field;