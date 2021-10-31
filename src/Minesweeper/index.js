import { useSelector } from "react-redux";
import Grid from "./Grid"
import { selectGameOver } from "./minesweeperSlice";
import TopBar from "./TopBar";

const Minesweeper = () => {

    const gameOver = useSelector(selectGameOver);


    return (
        <>
            <TopBar />
            {gameOver === false && <Grid />}
            {gameOver === true && "PRZEGRAŁEŚ !!!"}
        </>
    );
};
export default Minesweeper;