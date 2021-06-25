import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
    return  (
    <header className={classes.header}>
        <div className={classes.logo}>STAR-WARS</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to="/characters" activeClassName={classes.active}>All Characters</NavLink>
                </li>
                <li>
                    <NavLink to="/characters/" activeClassName={classes.active}>Details</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
}; 
export default MainHeader;