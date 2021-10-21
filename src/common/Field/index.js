import { useDispatch } from "react-redux";
import { setReviled, setMarkedAsMine, setFieldNumber } from "./../../Minesweeper/minesweeperSlice";

const Field = ({ id, mine, reviled, markedAsMine, fieldNumber }) => {

    const dispatch = useDispatch();

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(setReviled(id));
            dispatch(setFieldNumber(id));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            dispatch(setMarkedAsMine(id));
        }
    };

    return (

        <button onClick={clickHandler} onContextMenu={clickHandler}>{fieldNumber || 0} {reviled && id} {markedAsMine && "🚩"} {mine && "💣"}</button>

    );
};

export default Field;