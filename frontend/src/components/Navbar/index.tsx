import { ReactComponent as Githubicon } from "assets/img/github.svg";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="drake-games-nav-content">
          <h1>Drake Games</h1>
          <a href="https://github.com/Drake-Montgomery/Drake-Games">
            <div className="drake-games-contact-container">
              <Githubicon />
              <p className="drake-games-contact-link">/Drake Montgomery</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;