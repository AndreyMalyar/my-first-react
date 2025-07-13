import Menu from "../../menu/menu.tsx";
import CharactersLayout from "./charactersLayout.tsx";
import Pagination from "./pagination.tsx";
import FooterRickMorty from "./FooterRickMorty.tsx";
import {useNavigate} from "react-router-dom";

function RickMortyPage(){
    const navigate = useNavigate();


    const handleDetailsClick = () => {
        navigate('/rickAndMorty/viewCode'); // переходим на страницу посмотреть код
    }

    return (
        <div>
            <div className={"container"}>
                <Menu/>
                <section className={"section"}>
                    <button onClick={handleDetailsClick} className="btn" style={{margin: "20px 0 0 auto", display: "block"}}>Посмотреть код</button>
                    <h2 className={'rickAndMorty__title'}>Rick and Morty</h2>
                    <p className={'rickAndMorty__description'}>Список персонажей, используется Redux store (npm install @reduxjs/toolkit react-redux)</p>
                    <Pagination/>
                    <CharactersLayout/>
                </section>
            </div>
            <FooterRickMorty/>
        </div>

    )
}

export default RickMortyPage;