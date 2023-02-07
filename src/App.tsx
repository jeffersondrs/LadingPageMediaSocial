import "./App.css";

import "./assets/css/main.css";
import {
  BsTwitter,
  BsWhatsapp,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function App() {
  return (
    <div className="App is-preload">
      <div id="wrapper">
        <div id="bg"></div>
        {/* <div id="overlay"></div> */}
        <div id="main">
          <header id="header">
            <h1 className="capitalize">Jefferson Santos</h1>
            <p>
              Desenvolvedor &nbsp;&bull;&nbsp; Full Stack &nbsp;&bull;&nbsp;
              MERN
            </p>
            <nav>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/kalliadranoth"
                    className="icon brands"
                  >
                    <BsTwitter>
                      <span className="label">Twitter</span>
                    </BsTwitter>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/jefferson.duarteramos.1"
                    className="icon brands"
                  >
                    <BsFacebook>
                      <span className="label">Facebook</span>
                    </BsFacebook>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeffersondrs/"
                    className="icon brands"
                  >
                    <BsLinkedin>
                      <span className="label">Linkedin</span>
                    </BsLinkedin>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jeffersondrs"
                    className="icon brands"
                  >
                    <BsGithub>
                      <span className="label">Github</span>
                    </BsGithub>
                  </a>
                </li>
                <li>
                  <a href="https://gmail.com/" className="icon solid">
                    <SiGmail>
                      <span className="label">Email</span>
                    </SiGmail>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+55021973152800"
                    className="icon brands"
                  >
                    <BsWhatsapp>
                      <span className="label">Whatsapp</span>
                    </BsWhatsapp>
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <footer className="bg-black/20 font-medium" id="footer">
            <span className="copyright">
              &copy; Lading Page Designed and edit by:{" "}
              <a href="#">JEFFERSONDRS</a>.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
