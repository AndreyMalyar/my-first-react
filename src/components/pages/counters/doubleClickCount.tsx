import {useState, useRef} from "react";
import {setSelectedCounter} from "./countersConfig.ts";
import {useNavigate} from "react-router-dom";

const THRESHOLD = 300;

function DoubleClickCounter() {
    const [count, setCount] = useState<number>(0);
    const navigate = useNavigate()
    // Запоминает время последнего щелчка в значение useRef
    const lastClickTime = useRef<number>(0);

    const onClick = () => {
        const isDoubleClick: boolean = Number(Date.now()) - lastClickTime.current < THRESHOLD;

        if (isDoubleClick) {
            setCount(count + 1);
        } else {
            //обновление useRef current
            lastClickTime.current = Date.now();
        }
    };

    const handleDetailsClick = () => {
        setSelectedCounter("doubleClick"); // устанавливаем выбранный счетчик
        navigate('/counters/counter'); // переходим на страницу к счетчикам
    };

    return (
        <div className='styledCount count'>
            <h3 className="count__title">Счетчик двойных кликов с useRef</h3>
            <div className="count__box">
                <p className={'count__out'}>{count}</p>
                <button className='count__btn doubleClick__btn' onClick={onClick}>двойной клик</button>
            </div>
            <button className={"moreDetails-btn btn"} onClick={handleDetailsClick}>Подробнее</button>
        </div>
    )
}

export default DoubleClickCounter;