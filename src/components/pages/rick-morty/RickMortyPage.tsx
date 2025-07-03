import Menu from "../../menu/menu.tsx";
import CharactersLayout from "./charactersLayout.tsx";
import Pagination from "./pagination.tsx";
import FooterRickMorty from "./FooterRickMorty.tsx";

function RickMortyPage(){
    return (
        <div>
            <div className={"container"}>
                <Menu/>
                <section className={"section"}>
                    <h2 className={'rickAndMorty__title'}>Rick and Morty</h2>
                    <p className={'rickAndMorty__description'}>Список персонажей</p>
                    <Pagination/>
                    <CharactersLayout/>
                </section>
            </div>
            <FooterRickMorty/>
        </div>

    )
}

export default RickMortyPage;