import "./codeReduxInfo.scss";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../../ui/ImageCallery.tsx";

//images
import slide_1 from "../../../assets/imgRedux/characterSlice-ts_1.png"
import slide_2 from "../../../assets/imgRedux/characterSlice-ts_2.png"
import slide_3 from "../../../assets/imgRedux/characterSlice-ts_3.png"
import slide_4 from "../../../assets/imgRedux/characterSlice-ts_4.png"
import slide_5 from "../../../assets/imgRedux/characterSlice-ts_5.png"
import slide_6 from "../../../assets/imgRedux/characterSlice-ts_6.png"
import slide_7 from "../../../assets/imgRedux/characterSlice-ts_7.png"
import slide_8 from "../../../assets/imgRedux/characterSlice-ts_8.png"

const reduxCodeAll = [slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7, slide_8]

interface IArrNotes {
    id: string;
    name: string;
    description: string;
}

const arrInfoRedux: IArrNotes[] = [
    {id: "1", name: "Создание store", description: "Шаг первый создание store"},
    {id: "2", name: "Оборачивание в Provider:", description: "Provider должен быть выше всех компонентов, которые используют Redux. Обычно это самый верхний уровень приложения."},
    {id: "3", name: "Использование в компонентах:", description: "Использование может быть в любом месте приложения"},
    {id: "4", name: "createAsyncThunk", description: "для async операций"},
    {id: "5", name: "3 состояния", description: "pending, fulfilled, rejected"},
    {id: "6", name: "extraReducers", description: "для обработки async действий"},
    {id: "7", name: "useEffect", description: "для вызова при монтировании"},
]

const arrSuccessful: IArrNotes[] = [
    {id: "data", name: "data", description: "самое популярное поле для основного содержимого ответа"},
    {id: "results", name: "results", description: "часто используется для списков или результатов поиска"},
    {id: "items", name: "items", description: "альтернатива для массивов данных"},
    {id: "payload", name: "payload", description: "иногда встречается как синоним data"},
]
const arrStructured: IArrNotes[] = [
    {id: "message", name: "message", description: "текстовое сообщение для пользователя"},
    {id: "status", name: "status", description: "статус операции (success, error, etc.)"},
    {id: "code", name: "code", description: "числовой код ответа"},
    {id: "timestamp", name: "timestamp", description: "время ответа"},
    {id: "meta", name: "meta", description: "метаданные (пагинация, общее количество и т.д.)"},
]


const showNotes = (arr: IArrNotes[], title: string) => {
    return (
        <div style={{marginTop: "10px"}}>
            <strong>{title}</strong>
        {arr.map(item => (
            <p key={item.id}>{item.name} – {item.description}</p>
            ))}
        </div>
    )
}


function CodeRickMortyPage(){
    const navigate = useNavigate();

    return(
        <main className="codeReduxInfo">
            <div className="container">
                <div className="codeReduxInfo__navigation">
                    <button className='btn' onClick={() => navigate('/redux')}>
                        ← Перейти на страницу Redux
                    </button>
                </div>
                {showNotes(arrInfoRedux, "Настройка Redux")}
                {showNotes(arrSuccessful, "Для успешных ответов")}
                {showNotes(arrStructured, "Для структурированных ответов")}


            </div>
            {/* Используем компонент ImageGallery */}
            <ImageGallery
                images={reduxCodeAll}
                alt={"code image Redux"}
            />
        </main>
    )
}

export default CodeRickMortyPage;


