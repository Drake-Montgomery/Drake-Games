import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="musicmovie-nav-content">
          <h1>Drake Games</h1>
          <a href="https://github.com/Drake-Montgomery/Drake-Games">
            <div className="drake-games-contact-container">
              <GithubIcon />
              <p className = "musicmovie-contact-link">/Drake Montgomery</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
