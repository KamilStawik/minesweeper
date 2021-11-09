import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMarkedAsMine, revealSurroundingFields, leftClick, selectGameStatus } from "./../../minesweeperSlice";
import { StyledField } from "./styled";

const Field = ({ id, mine, coordinates, revealed, markedAsMine, surroundingMines }) => {
    const dispatch = useDispatch();
    const gameStatus = useSelector(selectGameStatus);

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(leftClick(id));
            surroundingMines === 0 && dispatch(revealSurroundingFields(coordinates));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            revealed === false && dispatch(setMarkedAsMine(id));
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
            surroundingMines={surroundingMines}
            onClick={gameStatus !== "lost" && gameStatus !== "won" ? clickHandler : undefined}
            onContextMenu={gameStatus !== "lost" && gameStatus !== "won" ? clickHandler : undefined}
        >
            {revealed && mine === false && (surroundingMines === 0 ? "" : surroundingMines)}
            {revealed && mine && "💣"}
            {markedAsMine && gameStatus === "gameIsOn" && "🚩"}
        </StyledField>
    );
};

export default Field;