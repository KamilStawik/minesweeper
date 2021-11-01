import { useSelector } from "react-redux";
import Grid from "./Grid"
import { selectGameStatus } from "./minesweeperSlice";
import TopBar from "./TopBar";

const Minesweeper = () => {

    const gameStatus = useSelector(selectGameStatus);

    return (
        <>
            <TopBar />
            {gameStatus === "initial" && <Grid />}
            {gameStatus === "readyToStart" && <Grid />}
            {gameStatus === "gameIsOn" && <Grid />}
            {gameStatus === "lost" && "PRZEGRAŁEŚ !!!"}
            {gameStatus === "won" && "WYGRAŁEŚ !!!"}
        </>
    );
};
export default Minesweeper;