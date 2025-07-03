import { useState, useRef } from "react";
import type { MouseEvent } from "react";
import {useNavigate} from "react-router-dom";
import {setSelectedCounter} from "./countersConfig.ts";

function CounterOneEvents() {
    const [count, setCount] = useState(0);
    const incRef = useRef(null);
    const navigate = useNavigate()

    const onClick = (evt: MouseEvent<HTMLButtonElement>) => {
        // console.log('Event:', evt); // Проверить, что событие есть
        const delta = evt.target === incRef.current ? 1 : -1;
        setCount(value => value + delta);
    }

    const handleDetailsClick = () => {
        setSelectedCounter("oneEvent"); // устанавливаем выбранный счетчик
        navigate('/counters/counter'); // переходим на общую страницу
    };

    return (
        <div className='styledCount count'>
            <h3 className='count__title'>Счетчик с единым обработчиком для inc и dec</h3>
            <div className="count__box">
                <p className={'count__out'}>{count}</p>
                <button className='count__btn' onClick={onClick} type="button">-</button>
                <button className='count__btn_inc count__btn' ref={incRef} onClick={onClick} type="button">+</button>
            </div>
            <button className={"moreDetails-btn btn"} onClick={handleDetailsClick}>Подробнее</button>
        </div>
    )

}

export default CounterOneEvents;