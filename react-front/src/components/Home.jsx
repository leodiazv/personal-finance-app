import Balance from "./Balance";
import Actions from "./Actions";
import Resume from "./Resume";
import NavBar from "./NavBar";

import '../css/home.css'

const Home = () => {
    return (
        <div className="home">
            <Balance/>
            <Actions/>
            <Resume/>
            <NavBar/>
        </div>
    );
};

export default Home;