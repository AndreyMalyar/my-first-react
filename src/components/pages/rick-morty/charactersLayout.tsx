import { useAppDispatch, useAppSelector} from "../../../store/hooks.ts";
import { fetchCharacters } from "../../../store/slice/characterSlice.ts";
import { useEffect } from "react";
import Character from "./character.tsx";
import Loader from "../../loader.tsx";

function CharactersLayout() {
    const { characters, isLoading  } = useAppSelector(state => state.characters);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!characters.length) {
            dispatch(fetchCharacters())
        }
    }, [])

    return (
        <div className={"layout"}>
            {isLoading && <Loader />}
            {!isLoading && characters.length > 0 && characters.map(item => <Character key={item.id} character={item} />)}
        </div>
    )
}

export default CharactersLayout;
