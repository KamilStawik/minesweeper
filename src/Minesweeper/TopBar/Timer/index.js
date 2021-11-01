import useTimer from "./useTimer";

const Timer = () => {

    return (
        <>
            {useTimer()}
            <button>
                Czas start / stop
            </button>
        </>
    );
};

export default Timer;