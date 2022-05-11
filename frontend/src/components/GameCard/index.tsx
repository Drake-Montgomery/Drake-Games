import GameScore from 'components/GameScore';
import { Link } from 'react-router-dom';

function GameCard() {
    const game = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "Demon's Souls",
        count: 2,
        score: 4.8,
    };

    return (
        <>
            <div>
                <img className='drakegames-games-card-image' src={game.image} alt={game.title} />
                <div className="drakegames-card-bottom-container">
                    <h3>{game.title}</h3>
                    <GameScore />
                    <Link to={`/form`}>
                        <div className="btn btn-primary drakegames-btn">Avaliar</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default GameCard;