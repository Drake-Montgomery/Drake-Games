import GamesStars from 'components/GameStars';
import './GameScore.css';

function GameScore() {
    const score = 3.5;
    const count = 13;

    return(
        <div className="drakegames-score-container">
            <p className="drakegames-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <GamesStars />
            <p className="drakegames-score-count">{count} avaliações</p>
        </div>
    ); 
}

export default GameScore;