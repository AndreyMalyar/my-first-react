import { useState} from "react";
import { useNavigate } from "react-router-dom";
import type { JSX, CSSProperties } from "react";
import { setSelectedCounter } from "./countersConfig.ts";


interface BtnProps {
    handleClick: () => void;
    className?: string;
    label: string;
}

const Button = ({ handleClick, label, className }: BtnProps): JSX.Element => {
    const [isHover, setIsHover] = useState(false);
    const onClick = (): void => {
        handleClick();
    }

    const buttonStyle = {
        backgroundColor: isHover ? 'brown' : "#315F85",
    } as CSSProperties;

    return (
        <button
            className={className}
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            type={"button"}
        >
            {label}
        </button>
    )
}

function StyledCounter() {
    const [count, setCount] = useState<number>(0);
    const navigate = useNavigate()
    const update = (delta: number): void => setCount(c => c + delta);

    const handleDetailsClick = () => {
        setSelectedCounter("styled"); // устанавливаем выбранный счетчик
        navigate('/counters/counter'); // переходим на общую страницу
    };

    return (
        <div className="styledCount count">
            <h3 className="count__title">Стилизованный счетчик с локальным состоянием useState</h3>
            <div className="count__box">
                <p className={'count__out'}>{count}</p>
                <Button
                    handleClick={() => update(-1)}
                    label={'-'}
                    className={'count__btn'}
                />
                <Button
                    handleClick={() => update(1)}
                    label={'+'}
                    className={'count__btn_inc count__btn'}
                />
            </div>
            <button className={"moreDetails-btn btn"} onClick={handleDetailsClick}>Подробнее</button>
        </div>
    )
}

export default StyledCounter;