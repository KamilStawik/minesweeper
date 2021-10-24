import { useSelector } from "react-redux";
import Grid from "./Grid"
import { selectGameOver } from "./minesweeperSlice";

const Minesweeper = () => {

    const gameOver = useSelector(selectGameOver);


    return (
        <>
            {gameOver === false && <Grid />}
            {gameOver === true && "PRZEGRAŁEŚ !!!"}
        </>
    );
};
export default Minesweeper;