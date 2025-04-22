import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css"; // Import CSS for styling

const NavDropdown = () => {
  return (
    <div className="nav-item dropdown">
      <Link to="#" className="nav-link">
       Menu
      </Link>
      <ul className="dropdown-menu">
        {/* Agricultural Light */}
        <li className="dropdown-item">
          <Link to="category/Architecturallight" className="dropdown-link">
            1
          </Link>
          <ul className="dropdown-submenu">
            <li>
              <Link to="/subcategory/PESTOSERIES" className="dropdown-item">a</Link>
            </li>
            <li>
              <Link to="/subcategory/GLANZASERIES" className="dropdown-item">b</Link>
            </li>
            <li>
              <Link to="/subcategory/DOMSERIES" className="dropdown-item">c</Link>
            </li>
            <li>
              <Link to="/subcategory/COBSPOTLIGHT" className="dropdown-item">d</Link>
            </li>
            <li>
              <Link to="/subcategory/PULLOUTSERIES" className="dropdown-item">e</Link>
            </li>
            <li>
              <Link to="/subcategory/LASERBLADE" className="dropdown-item">f</Link>
            </li>
            <li>
              <Link to="/subcategory/DOWNLIGHT" className="dropdown-item">g</Link>
            </li>
          </ul>
        </li>

        {/* Commercial LED Light */}
        <li className="dropdown-item">
          <Link to="#" className="dropdown-link">
           2
          </Link>
          <ul className="dropdown-submenu">
            <li>
              <Link to="/subcategory/PESTOSERIES" className="dropdown-item">a</Link>
            </li>
            <li>
              <Link to="/subcategory/GLANZASERIES" className="dropdown-item">b</Link>
            </li>
            <li>
              <Link to="/subcategory/DOMSERIES" className="dropdown-item">c</Link>
            </li>
            <li>
              <Link to="/subcategory/COBSPOTLIGHT" className="dropdown-item">d</Link>
            </li>
            <li>
              <Link to="/subcategory/PULLOUTSERIES" className="dropdown-item">e</Link>
            </li>
            <li>
              <Link to="/subcategory/LASERBLADE" className="dropdown-item">f</Link>
            </li>
            <li>
              <Link to="/subcategory/DOWNLIGHT" className="dropdown-item">g</Link>
            </li>
          </ul>
        </li>

        {/* Cylinder Lights */}
        <li className="dropdown-item">
          <Link to="#" className="dropdown-link">
           2
          </Link>
          <ul className="dropdown-submenu">
            <li>
              <Link to="/subcategory/PESTOSERIES" className="dropdown-item">a</Link>
            </li>
            <li>
              <Link to="/subcategory/GLANZASERIES" className="dropdown-item">b</Link>
            </li>
            <li>
              <Link to="/subcategory/DOMSERIES" className="dropdown-item">c</Link>
            </li>
            <li>
              <Link to="/subcategory/COBSPOTLIGHT" className="dropdown-item">d</Link>
            </li>
            <li>
              <Link to="/subcategory/PULLOUTSERIES" className="dropdown-item">e</Link>
            </li>
            <li>
              <Link to="/subcategory/LASERBLADE" className="dropdown-item">f</Link>
            </li>
            <li>
              <Link to="/subcategory/DOWNLIGHT" className="dropdown-item">g</Link>
            </li>
          </ul>
        </li>

        {/* Panel Down Light */}
        <li className="dropdown-item">
          <Link to="#" className="dropdown-link">
           3
          </Link>
          <ul className="dropdown-submenu">
            <li>
              <Link to="/subcategory/PESTOSERIES" className="dropdown-item">a</Link>
            </li>
            <li>
              <Link to="/subcategory/GLANZASERIES" className="dropdown-item">b</Link>
            </li>
            <li>
              <Link to="/subcategory/DOMSERIES" className="dropdown-item">c</Link>
            </li>
            <li>
              <Link to="/subcategory/COBSPOTLIGHT" className="dropdown-item">d</Link>
            </li>
            <li>
              <Link to="/subcategory/PULLOUTSERIES" className="dropdown-item">e</Link>
            </li>
            <li>
              <Link to="/subcategory/LASERBLADE" className="dropdown-item">f</Link>
            </li>
            <li>
              <Link to="/subcategory/DOWNLIGHT" className="dropdown-item">g</Link>
            </li>
          </ul>
        </li>

        {/* Garden Light */}
        <li className="dropdown-item">
          <Link to="#" className="dropdown-link">
           4
          </Link>
          <ul className="dropdown-submenu">
            <li>
              <Link to="/subcategory/PESTOSERIES" className="dropdown-item">a</Link>
            </li>
            <li>
              <Link to="/subcategory/GLANZASERIES" className="dropdown-item">b</Link>
            </li>
            <li>
              <Link to="/subcategory/DOMSERIES" className="dropdown-item">c</Link>
            </li>
            <li>
              <Link to="/subcategory/COBSPOTLIGHT" className="dropdown-item">d</Link>
            </li>
            <li>
              <Link to="/subcategory/PULLOUTSERIES" className="dropdown-item">e</Link>
            </li>
            <li>
              <Link to="/subcategory/LASERBLADE" className="dropdown-item">f</Link>
            </li>
            <li>
              <Link to="/subcategory/DOWNLIGHT" className="dropdown-item">g</Link>
            </li>
          </ul>
        </li>

        {/* Highway Light */}
        <li className="dropdown-item">
          <Link to="#" className="dropdown-link">
           5
          </Link>
          <ul className="dropdown-submenu">
            <li>
              <Link to="/subcategory/PESTOSERIES" className="dropdown-item">a</Link>
            </li>
            <li>
              <Link to="/subcategory/GLANZASERIES" className="dropdown-item">b</Link>
            </li>
            <li>
              <Link to="/subcategory/DOMSERIES" className="dropdown-item">c</Link>
            </li>
            <li>
              <Link to="/subcategory/COBSPOTLIGHT" className="dropdown-item">d</Link>
            </li>
            <li>
              <Link to="/subcategory/PULLOUTSERIES" className="dropdown-item">e</Link>
            </li>
            <li>
              <Link to="/subcategory/LASERBLADE" className="dropdown-item">f</Link>
            </li>
            <li>
              <Link to="/subcategory/DOWNLIGHT" className="dropdown-item">g</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
