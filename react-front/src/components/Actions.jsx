import { Link } from "react-router-dom";
import '../css/actions.css'

const Actions = () => {
    return (
        <div className='actions'>
            <div className="button">
                <Link to="/abm">
                    <span className="material-symbols-outlined">add_circle</span>
                    <p>ADD</p>
                </Link>
            </div>
            <div className="button">
                <Link to="/all_op">
                    <span className="material-symbols-outlined">receipt</span>
                    <p>ALL</p>
                </Link>
            </div>
            <div className="button">
                <span className="material-symbols-outlined">more_horiz</span>
                <p>MORE</p>
            </div>

        </div>
    );
};

export default Actions;