import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";
import { increment, decrement, setCount } from "../../../store/slice/countSlice.ts";
import { setSelectedCounter } from "./countersConfig.ts";


function StoreCounter() {
    const [inputCount, setInputCount] = useState<number>(0);
    const { count } = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const incrementFn = () => {
        if(count < 100){
            dispatch(increment());
        }
    }
    const onChange = (value: number) => {
        setInputCount(value);
    }
    const onClick = () => {
        if (inputCount > 0 && inputCount < 100 ) {
            dispatch(setCount(inputCount));
            setInputCount(0);
        }
    }

    const handleDetailsClick = () => {
        setSelectedCounter("store"); // устанавливаем выбранный счетчик
        navigate('/counters/counter'); // переходим на страницу к счетчикам
    };

    return (
        <div className="storeCount count">
            <p className="count__title">Счетчик с Redux store для глобального состояния</p>
            <div className="count__box">
                <p className="count__out">{count}</p>
                <button className="count__btn" onClick={() => dispatch(decrement())}>-</button>
                <button className="count__btn_inc count__btn" onClick={incrementFn}>+</button>
            </div>
            <input type="number" value={inputCount} onChange={(evt) => onChange(evt.target.valueAsNumber)}/>
            <button className="btn" onClick={onClick}>Установить счетчик</button>
            <button className={"moreDetails-btn btn"} onClick={handleDetailsClick}>Подробнее</button>
        </div>
    )
}

export default StoreCounter;