import { Link } from "react-router-dom";
import '../css/navBar.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='button'>
                <Link to="/">
                    <span className="material-symbols-outlined">home</span>
                    <p>HOME</p>
                </Link>
            </div>
            <div className='button'>
                <span className="material-symbols-outlined">account_box</span>
                <p>ACCOUNT</p>
            </div>
        </div>
    );
};

export default NavBar;