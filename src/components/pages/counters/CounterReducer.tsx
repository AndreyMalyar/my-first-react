import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { setSelectedCounter } from "./countersConfig.ts";

interface CounterState {
    type: string;
}

function reducer(state:number, { type }: CounterState) {
    switch (type) {
        case "INCREMENT":
            if(state === 99) return state;
            return state + 1;
        case "DECREMENT":
            if(state === 0) return state;
            return state - 1;
        default:
            return state;
    }
}

function CounterReducer () {
    const [count, dispatch] = useReducer(reducer, 0);
    const navigate = useNavigate()

    const handleDetailsClick = () => {
        setSelectedCounter("reducerCounter"); // устанавливаем выбранный счетчик
        navigate('/counters/counter');
    };

    return (
        <div className={"styledCount count"}>
            <h3 className={"count__title"}>Счетчик с useReducer и ограничениями</h3>
            <div className={"count__box"}>
                <p className={'count__out'}>{count}</p>
                <button className={"count__btn"}
                        onClick={() => dispatch({type: "DECREMENT"})}
                >
                    -
                </button>
                <button className={"count__btn_inc count__btn"}
                        onClick={() => dispatch({type: "INCREMENT"})}
                >
                    +
                </button>
            </div>
            <button className={"moreDetails-btn btn"} onClick={handleDetailsClick}>Подробнее</button>
        </div>
    )
}

export default CounterReducer;