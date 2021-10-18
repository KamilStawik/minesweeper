import { useDispatch } from "react-redux";
import { setReviled, setMarked } from "./../../Minesweeper/minesweeperSlice";

const Field = ({ number, bomb, reviled, marked }) => {

    const dispatch = useDispatch();

    const clickHandler = (event) => {
        if (event.type === 'click') {
            event.preventDefault();
            dispatch(setReviled(number));
        } else if (event.type === 'contextmenu') {
            event.preventDefault();
            dispatch(setMarked(number));
        }
    };

    return (

        <button onClick={clickHandler} onContextMenu={clickHandler}>{reviled && number} {marked && "🚩"} {bomb && "💣"}</button>

    );
};

export default Field;