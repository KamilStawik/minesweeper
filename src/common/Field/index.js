import { useDispatch } from "react-redux";
import { setReviled, setMarked, setFieldNumber } from "./../../Minesweeper/minesweeperSlice";

const Field = ({ id, bomb, reviled, marked, fieldNumber }) => {

    const dispatch = useDispatch();

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(setReviled(id));
            dispatch(setFieldNumber(id));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            dispatch(setMarked(id));
        }
    };

    return (

        <button onClick={clickHandler} onContextMenu={clickHandler}>{fieldNumber || 0} {reviled && id} {marked && "🚩"} {bomb && "💣"}</button>

    );
};

export default Field;