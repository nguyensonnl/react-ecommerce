import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/auth/login");
  };
  return (
    <div className="header__admin">
      <div className="header__right">
        <div className="header__admin__name">Xin chào, admin</div>
        <Link to="" className="header__admin__link">
          <i className="fa-solid fa-user"></i>
        </Link>
        <button
          className="header__admin__logout"
          onClick={() => handleLogout()}
        >
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
