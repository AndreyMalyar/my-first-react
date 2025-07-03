import type {FC, JSX} from 'react'
import {Link, useLocation} from "react-router-dom";

interface LinkProps {
    label: string;
    to: string;
    target?: string;
    id?: string;
}

const MenuItem: FC<LinkProps> = ({label, to, ...rest}: LinkProps): JSX.Element => {
    const location = useLocation()
    const isActive = location.pathname === to;

    return <Link
        className={`menu__link btn ${isActive ? 'active' : ''}`} to={to} {...rest}
    >
        {label}
    </Link>
}
export default MenuItem;

/*
<li className="menu-item">
    <a className="menu-link" href={href} {...rest}>
        {label}
    </a>
</li>
*/
