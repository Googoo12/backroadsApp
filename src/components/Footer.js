import { pageLinks } from "./Data";
import { socialLinks } from "./Data";
export default function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((footer) => {
          const { id, href, text } = footer;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            // other structuring possibility
            // const {id,href,icon}=link;
            <li key={id}>
              <a
                className="footer-icon"
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
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}
