import Balance from "./Balance";
import Actions from "./Actions";
import Resume from "./Resume";
import NavBar from "./NavBar";

import '../css/abm.css'
import CreateOp from "./CreateOp";

const ABM = () => {
    return (
        <div className="abm">
            <Balance/>
            <Actions/>
            <CreateOp/>
            <NavBar/>
        </div>
    );
};

export default ABM;