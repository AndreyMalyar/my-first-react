import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getSelectedCounter } from "./countersConfig.ts";
import ImageGallery from "./ui/ImageCallery.tsx";

function CountPages() {
    const navigate = useNavigate();
    const selectedCounter = getSelectedCounter();

    // Если не выбран счетчик, возвращаемся на главную страницу счетчиков
    useEffect(() => {
        if(!selectedCounter) navigate('/counters');
    }, [selectedCounter, navigate]);

    // Если счетчик не выбран, показываем загрузку пока происходит редирект
    if(!selectedCounter) {
        return <div>Перенаправление...</div>
    }

    return (
        <div className={"container countInfo"}>
            <div className="countInfo-navigation">
                <button className='countInfo-navigation__btn btn' onClick={() => navigate('/counters')}>← Назад к
                    счетчикам
                </button>
            </div>

            <div className="countInfo__tech-info">
                <p><strong>ID:</strong> {selectedCounter.id}</p>
                <p><strong>Компонент:</strong> {selectedCounter.component.name}</p>
            </div>

            <h2 className="countInfo__title">{selectedCounter.name}</h2>
            <p className="countInfo__description">{selectedCounter.description}</p>
            <div className="countInfo-features">
                <h3 className="countInfo-features__title">Особенности</h3>
                <ul className="countInfo-features__list">
                    {selectedCounter.features.map((feature, i) => (
                        <li className="countInfo-features__item" key={i}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Используем компонент ImageGallery */}
            <ImageGallery
                images={selectedCounter.images || []}
                alt={selectedCounter.name}
            />
        </div>
    )
}

export default CountPages;


/*
useEffect(() => {
    const currentCharacter  = characters.find(item => item.id === Number(params.id))
    if(!currentCharacter || !location.state.type) {navigate("/rickAndMorty")}
    setCharacter(currentCharacter)
}, [])
*/