import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "./Data";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map(({ id, href, icon }) => {
            return (
              // other structuring possibility
              // const {id,href,icon}=link;
              <li key={id}>
                <a
                  className="nav-icon"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
