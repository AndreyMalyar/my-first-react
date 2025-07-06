import MenuItem from "./menuItem.tsx";
import Greeting from "./greeting.tsx";

function Menu(){
    return (
        <nav className={"menu"}>
           <Greeting />
            <div className={"menu__item"}>
                <MenuItem label="home" to="/" />
                <MenuItem label="rick and morty" to="/rickAndMorty" id="rickAndMorty-link" />
                <MenuItem label="counters" to="/counters" id="counters-link" />
                <MenuItem label="other" to="/other" id="other-link" />
                <MenuItem label="blog" to="/blog" target="_blank" id="blog-link" />
            </div>
        </nav>
    )
}

export default Menu;

