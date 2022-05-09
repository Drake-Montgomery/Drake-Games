import {ReactComponent as Arrow } from 'assets/img/Arrow.svg';
import './pagination.css'

function Pagination() {
    return (
        <div className="drakegames-pagination-container" >
            <div className="drakegames-pagination-box">
                <button className="drakegames-pagination-button" disabled={true}>
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="drakegames-pagination-button" disabled={false}>
                    <Arrow className="drakegames-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;