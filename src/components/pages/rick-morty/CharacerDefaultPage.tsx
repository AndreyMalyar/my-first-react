import { useAppSelector, useAppDispatch } from "../../../store/hooks.ts";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCharacterById, clearCurrentCharacter } from "../../../store/slice/characterSlice.ts";
import FooterRickMorty from "./FooterRickMorty.tsx";


interface PageParams {
    id: string; // всегда строка
}

function CharacterDefaultPage () {
    // Получаем данные из store
    const { currentCharacter, isLoadingDetail, error } = useAppSelector(state => state.characters);
    const dispatch = useAppDispatch();
    // React Router hooks
    const params = useParams<Readonly<PageParams>>();
    const navigate = useNavigate()
    const location = useLocation();
    //console.log(params)
    // console.log(location)
    // Загружаем персонажа при монтировании/изменении ID
    useEffect(() => {
        if (params.id) {
            dispatch(fetchCharacterById(Number(params.id)));
        }
        // Очищаем данные при размонтировании
        return () => {
            dispatch(clearCurrentCharacter());
        };
    }, [params.id, dispatch]);

    const goBack = () => {
        // Если есть история - используем её
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            // Если нет истории (прямой переход) - на rick and morty
            navigate("/redux");
        }
    };

    // Обработка состояний загрузки и ошибок
    if (error) {
        return (
            <div className="character-default">
                <div className="visual-hidden"></div>
                <div className="character-default__error container">
                    <h2 className={'character-default__title'}>Rick and Morty</h2>
                    <h2 style={{color: "red"}}>Ошибка загрузки</h2>
                    <p>{error}</p>
                    <button className="btn" onClick={() => navigate("/redux")}>
                        Перейти к списку персонажей
                    </button>
                </div>
                <FooterRickMorty/>
            </div>
        );
    }

    return (
        <div className={"character-default"}>
            <div className="visual-hidden"></div>
            {isLoadingDetail && (
                <div className="loading-container container">
                    <p style={{textAlign: "center"}}>Загрузка информации о персонаже...</p>
                </div>
                )
            }
            {currentCharacter && (
                <div className={'container character-default__content'}>
                    <img className={'character-default__img'} src={currentCharacter.image}
                         alt={`Photo ${currentCharacter.name}`}/>
                    <div className={'character-default__list'}>
                        <h2 className={'character-default__title'}>Rick and Morty</h2>
                        <p>Имя персонажа: <strong className={'character-default__name'}>{currentCharacter.name}</strong>
                        </p>
                        <p className={'character-default__id'}>id персонажа: {params.id}</p>
                        <p>Статус: {currentCharacter.status === "unknown" ? "неизвестен" : currentCharacter.status}</p>
                        <p>Разновидность: {currentCharacter.species}</p>
                        <p>Пол: {currentCharacter.gender === "unknown" ? "неизвестен" : currentCharacter.gender}</p>
                        <p>Дата создания: {new Date(currentCharacter.created).toLocaleDateString('ru-RU')}</p>
                        <p>Источник: {location.state?.url ?
                            <a href={location.state?.url} target="_blank">Rick and Morty Api</a> : "неизвестен"}</p>
                    </div>
                    <button onClick={goBack} className="character-default__btn btn">← Вернуться к списку персонажей</button>
                </div>
            )}
            <FooterRickMorty/>
        </div>
    );
}

export default CharacterDefaultPage;



