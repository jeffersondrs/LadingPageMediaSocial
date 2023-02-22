import {
  BsTwitter,
  BsWhatsapp,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Footer from "../footer/Footer.component";

export default function Main() {
  return (
    <div id="main">
      <header id="header">
        <h1 className="capitalize">Jefferson Santos</h1>
        <p>
          Desenvolvedor &nbsp;&bull;&nbsp; Full Stack &nbsp;&bull;&nbsp; MERN
        </p>
        <nav>
          <ul>
            <li>
              <a
                href="https://twitter.com/kalliadranoth"
                className="icon brands"
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/jefferson.duarteramos.1"
                className="icon brands"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeffersondrs/"
                className="icon brands"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/jeffersondrs" className="icon brands">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="https://gmail.com/" className="icon solid">
                <SiGmail />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+55021973152800" className="icon brands">
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <Footer />
    </div>
  );
}
