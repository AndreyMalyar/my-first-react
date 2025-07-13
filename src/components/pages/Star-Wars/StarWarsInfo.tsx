import {useNavigate} from "react-router-dom";
import "./starWarsInfo.scss";
import ImageGallery from "../../ui/ImageCallery.tsx";

//картинки
import reducerImg_1 from "../../../assets/imgReducer/reducerImg_1.png";
import reducerImg_2 from "../../../assets/imgReducer/reducerImg_2.png";
import reducer_2 from "../../../assets/imgReducer/reducer_2.jpg"
import reducer_3 from "../../../assets/imgReducer/reducer_3.jpg"

const reducerImg_All = [reducerImg_1, reducerImg_2, reducer_2, reducer_3]



function starWarsInfo() {
    const navigate = useNavigate();

    return (
        <main className="starWarsInfo">
            <div className="container">
                <div className="starWarsInfo__navigation">
                    <button className='btn' onClick={() => navigate('/starWars')}>
                        ← Перейти на страницу Star Wars
                    </button>
                </div>
                <h4>Создание reducer</h4>
                <p>1. Определяем начальное состояние</p>
                <p>2. Определяем действие (action)</p>
                <p>3. Создание reducer</p>
                <br />
                <p>type – указывает тип действия</p>
                <p>payload – дополнительная информация</p>



            </div>
            {/* Используем компонент ImageGallery */}
            <ImageGallery
                images={reducerImg_All}
                alt={"code image Reducer"}
            />
        </main>
    )
}

export default starWarsInfo;

