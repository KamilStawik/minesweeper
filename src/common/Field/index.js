import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRevealed, setMarkedAsMine, revealSurroundingFields } from "./../../Minesweeper/minesweeperSlice";

const Field = ({ id, mine, coordinates, revealed, markedAsMine, surroundingMines }) => {

    const dispatch = useDispatch();

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(setRevealed(id));
            surroundingMines === 0 && dispatch(revealSurroundingFields(coordinates));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            dispatch(setMarkedAsMine(id));
        }
    };

    useEffect(() => {
        revealed === true && surroundingMines === 0 && dispatch(revealSurroundingFields(coordinates));
    }, [revealed]);

    return (

        <button onClick={clickHandler} onContextMenu={clickHandler}> {revealed && surroundingMines} {markedAsMine && "🚩"} {mine && "💣"}</button>

    );
};

export default Field;