import Grid from "./Grid"
import TopBar from "./TopBar";
import { Wrapper } from "./styled";
import LowBar from "./LowBar";

const Minesweeper = () => (
    <Wrapper>
        <TopBar />
        <Grid />
        <LowBar />
    </Wrapper >
);

export default Minesweeper;