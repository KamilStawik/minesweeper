import Grid from "./Grid"
import TopBar from "./TopBar";
import { Wrapper } from "./styled";

const Minesweeper = () => (
    <Wrapper>
        <TopBar />
        <Grid />
    </Wrapper >
);

export default Minesweeper;