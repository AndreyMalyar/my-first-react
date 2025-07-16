import MenuItem from "./menuItem.tsx";
import Greeting from "./greeting.tsx";

function Menu(){
    return (
        <nav className={"menu"}>
           <Greeting />
            <div className={"menu__item"}>
                <MenuItem label="home" to="/" />
                <MenuItem label="redux" to="/redux" id="redux-link" />
                <MenuItem label="useReducer" to="/useReducer" id="useReducer-link" />
                <MenuItem label="customHooks" to="/customHooks" id="customHooks-link" />
                <MenuItem label="counters" to="/counters" id="counters-link" />
                <MenuItem label="other" to="/other" id="other-link" />
            </div>
        </nav>
    )
}

export default Menu;

