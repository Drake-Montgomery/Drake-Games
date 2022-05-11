// import GameScore from "components/GameScore";
import { Link } from "react-router-dom";
import "./gamecard.css";

function GameCard() {
  const game = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "Demon's Souls",
    count: 2,
    score: 4.8,
  };

  // Voltar em 01:48:44

  return (
    <>
    <div className="drakegames-form-container">
      <img className="drakegames-games-card-image" src={game.image} alt={game.title} />
      <div className="drakegames-card-bottom-container">
        <h3>{game.title}</h3>
        <form className="drakegames-form">
          <div className="form-group drakegames-form-group">
            <label htmlFor="email">Informe seu Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group drakegames-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="drakegames-form-btn-container">
            <button type="submit" className="btn btn-primary drakegames-btn">Salvar</button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary drakegames-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default GameCard;
