import { useDispatch } from "react-redux";
import { setReviled, setMarkedAsMine } from "./../../Minesweeper/minesweeperSlice";

const Field = ({ id, mine, reviled, markedAsMine, surroundingMines }) => {

    const dispatch = useDispatch();

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(setReviled(id));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            dispatch(setMarkedAsMine(id));
        }
    };

    return (

        <button onClick={clickHandler} onContextMenu={clickHandler}> {reviled && surroundingMines} {markedAsMine && "🚩"} {mine && "💣"}</button>

    );
};

export default Field;