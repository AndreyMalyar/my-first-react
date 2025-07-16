import useCounter from "./useCounter.ts";
import {setSelectedCounter} from "./countersConfig.ts";
import {useNavigate} from "react-router-dom";

function CustomHooks(){
    const {counter, increment, decrement} = useCounter();
    const navigate = useNavigate()

    function handleDecrement(){
        if(counter === 0){ return }
        decrement();
    }

    const handleDetailsClick = () => {
        setSelectedCounter("hookCount"); // устанавливаем выбранный счетчик
        navigate('/counters/counter'); // переходим на общую страницу
    };

    return (
        <div className="count">
            <h3 className="count__title">Счетчик с кастомным хуком</h3>
            <div className="count__box">
                <p className="count__out">{counter}</p>
                <button className="count__btn" onClick={handleDecrement}>-</button>
                <button className="count__btn_inc count__btn" onClick={increment}>+</button>
            </div>
            <button className={"moreDetails-btn btn"} onClick={handleDetailsClick}>Подробнее</button>
        </div>

    )
}

export default CustomHooks;