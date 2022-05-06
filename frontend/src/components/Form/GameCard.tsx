// import GameScore from "components/GameScore";
// import { Link } from "react-router-dom";
// import "./style.css";

function GameCard() {
  const game = {
    id: 1,
    image: "https://www.ziliongames.com.br/banco_imagens/produtos/g/28120121424211.jpg",
    title: "Demon's Souls",
    count: 2,
    score: 4.8,
  };

  return (
    <>
      <div>
        <img className="drakegames-game-card-image" src={game.image} alt={game.title} />
        <div className="drakegames-card-bottom-container">
          <h3>{game.title}</h3>
          <GameCard />
          {/* <Link to={`/form/${game.id}`}> */}
          <div className="btn btn-primary drakegames-btn">Avaliar</div>
          {/* </Link> */}
        </div>
      </div>

      <div className="container dsmovie-form-container">
        <div>
          <div className="dsmovie-card">
            <img src={game.image} alt="The Boys" />
            <div className="dsmovie-form-description">
              <h3>{game.title}</h3>
              <form className="dsmovie-form">
                <div className="form-group dsmovie-form-group">
                  <label htmlFor="email">Informe seu Email</label>
                  <input className="form-control" type="email" id="email" />
                </div>
                <div className="form-group dsmovie-form-group">
                  <label htmlFor="score">Informe sua avaliação</label>
                  <select className="form-control" name="score" id="score">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </form>
              <div className="dsmovie-form-brn-container">
                <button className="dsmovie-btn" type="submit">Salvar</button>
                <a className="dsmovie-btn" href="Index.html">Cancelar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCard;
