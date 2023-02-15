import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header__admin">
      <div className="header__left">
        <div className="title">Online Shop</div>
      </div>
      <div className="header__right">
        <div className="header__admin__name">Xin chào, admin</div>
        <Link to="" className="header__admin__link">
          <i className="fa-solid fa-user"></i>
        </Link>
        <div className="header__admin__logout">
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
