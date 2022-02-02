//importing dependences
import { Link } from "react-router-dom";

//importing utils
import { items } from "./navbar.util";

//importing styles
import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div>Digiworks</div>
        </div>
        <div className="menu">
          <ul className="dw__no-mb">
            {items.map((item: any, index: number) => (
              <li key={index}>
                <Link to={item.path}> {item.name} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
