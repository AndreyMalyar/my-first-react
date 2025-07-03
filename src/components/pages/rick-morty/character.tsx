import type {CSSProperties, FC} from 'react'
import { useNavigate } from "react-router-dom"; // Link в данном случае

interface Props {
    character: {
        name: string;
        id: number;
        image: string;
    }
}


const Character: FC<Props> = ({ character }) => {
    const navigate = useNavigate()

    const style ={
        backgroundImage: `url(${character.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    } as CSSProperties;

    const navigateTo = () => {
        navigate(`character/${character.id}`, {
            replace: false,  //подмена истории в браузере
            state: { // передать state (может быть все что угодно) чтобы достать useLocation
                url: "https://rickandmortyapi.com/",
            }
        })
    }

    return (
        <div className={"character"}>
            <div className={"character__image"} style={style}></div>
            <p className={"character__id"}>{character.id}</p>
            <p className={"character__name"}>Имя персонажа: <br /> <span>{character.name}</span></p>
            {/*<Link to={`/rickAndMorty/character/${character.id}`}>Подробнее</Link>*/}
            <button className={"character__btn btn"} onClick={navigateTo}>Подробнее</button>
        </div>
    )
}

export default Character;