import {useReducer, useEffect, type JSX} from "react";
import "./styleStarWars.scss";
import Menu from "../../menu/menu.tsx";
import {useNavigate} from "react-router-dom";

const URL = "https://starwars-databank-server.vercel.app/api/v1/characters";
//https://starwars-databank.vercel.app/creature/single

// Интерфейс для персонажа
interface Character {
    _id: string;
    name: string;
    description: string;
    image: string;
}
// Интерфейс для состояния
interface State {
    status: "INITIALIZE" | "LOADING" | "SUCCESS" | "FAILURE"
    result: Character[] | null;
    error: string | null;
    isFirefox: boolean;
}

//Интерфейс для действий
interface LoaderAction {
    type: "LOADING" | "SUCCESS" | "FAILURE" | "SET_BROWSER";
    payload?: Character[] | string | boolean;
}

const INITIAL_STATE = {
    status: "INITIALIZE" as const,
    result: null,
    error: null,
    isFirefox: false,
}


function reducer(state: State, { type, payload }: LoaderAction ): State {
    // console.log('Reducer вызван с типом:', type, 'payload:', payload);
    switch (type) {
        case "LOADING":
            return {...state, status: "LOADING"};
        case "FAILURE":
            return {...state, status: "FAILURE", error: payload as string};
        case "SUCCESS":
            return {...state, status: "SUCCESS", result: payload as Character[]};
        case "SET_BROWSER":
            return {...state, isFirefox: payload as boolean};
    }
}

function StarWarsPage(): JSX.Element | null {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const navigate = useNavigate();

    useEffect(() => {
        const isFirefox = navigator.userAgent.includes('Firefox');
        dispatch({ type: "SET_BROWSER", payload: isFirefox });
    }, []);

    useEffect(() => {
        // console.log('useEffect запустился');
        // console.log('state.result:', state.result);
        // console.log('!state.result:', !state.result);
        // console.log('Тип state.result:', typeof state.result);
        // Сначала проверяем localStorage
        const cachedData = localStorage.getItem('starwars-characters');

        if (cachedData) {
            // console.log('Данные найдены в localStorage');
            dispatch({ type: "SUCCESS", payload: JSON.parse(cachedData) });
            return;
        }
        // Если нет кеша и нет данных в состоянии, загружаем
        if(!state.result){
            // console.log('Загружаем данные с сервера');
            dispatch({ type: "LOADING" });
            fetch(URL)
                .then(res => res.json())
                .then( ({data}) => {
                    // console.log('Данные получены, сохраняем в localStorage');
                    // Сохраняем в localStorage
                    localStorage.setItem('starwars-characters', JSON.stringify(data));
                    dispatch({ type: "SUCCESS", payload: data });
                })
                .catch( (error) => {
                    console.log('Ошибка:', error);
                    dispatch({ type: "FAILURE", payload: error.message || "Произошла ошибка" });
                });
        }

    }, [])

    // Когда все сделано, состояние можно деструктурировать в три переменные, которые в нем содержатся
    const { status, error, result, isFirefox } = state;

    // Выбираем стили в зависимости от браузера
    const scrollbarClass = isFirefox ? "card__description_firefox" : "card__description_default";

    /*
    Неправильно - return блокирует всю страницу (только если вставить отдельно в качестве компанента на страницу)
    if (status === "INITIALIZE") { return <h2>Initializing..</h2> }
    if (status === "LOADING") { return <h2>Loading...</h2> }
    if (status === "FAILURE") { return <h2>Error occurred: {error}</h2> }
    */

    const handleDetailsClick = () => {
        navigate('/useReducer/viewCode'); // переходим на страницу посмотреть код
    }

    //Функцию обновления
    const handleRefreshData = () => {
        // console.log('Обновляем данные вручную');
        localStorage.removeItem('starwars-characters');
        dispatch({ type: "LOADING" });
        fetch(URL)
            .then(res => res.json())
            .then( ({data}) => {
                localStorage.setItem('starwars-characters', JSON.stringify(data));
                dispatch({ type: "SUCCESS", payload: data });
            })
            .catch( (error) => {
                dispatch({ type: "FAILURE", payload: error.message || "Произошла ошибка" });
            });
    };

    return (
        <main className="container">
            <Menu/>
            <button onClick={handleDetailsClick} className="btn"
                    style={{margin: "20px 0 0 auto", display: "block"}}>
                Посмотреть код
            </button>
            <button onClick={handleRefreshData} className="btn"
                    style={{margin: "10px 0 0 auto", display: "block"}}>
                🔄 Обновить данные
            </button>

            <section className={"star-wars"}>
                <h3 className={"star-wars__title"}>Простой компонент загрузки (используется use Reducer)</h3>

                {/* Условный рендеринг только для контента */}
                {status === "INITIALIZE" && <h2>Initializing..</h2>}
                {status === "LOADING" && <h2>Loading...</h2>}
                {status === "FAILURE" && <h2>Error occurred: {error}</h2>}

                {status === "SUCCESS" && (
                    <>
                        <h3 className={"star-wars__subtitle"}>results are in</h3>
                        <div className={"star-wars__card-box"}>
                            {result?.map(item => (
                                <div key={item._id} className={"card"}>
                                    <h4 className={"card__title"}>{item.name}</h4>
                                    <p className={`card__description ${scrollbarClass}`}>{item.description}</p>
                                    <img className={"card__img"} src={item.image} width="60px"
                                         alt={`photo: ${item.name}`}/>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </main>
    )
}

export default StarWarsPage;