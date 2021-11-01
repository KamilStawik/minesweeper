import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMarkedAsMine, revealSurroundingFields, leftClick } from "./../../Minesweeper/minesweeperSlice";

const Field = ({ id, mine, coordinates, revealed, markedAsMine, surroundingMines }) => {

    const dispatch = useDispatch();

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(leftClick(id));
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

        <button onClick={clickHandler} onContextMenu={clickHandler}> {revealed && surroundingMines} {revealed && mine && "💣"} {markedAsMine && "🚩"}</button>

    );
};

export default Field;