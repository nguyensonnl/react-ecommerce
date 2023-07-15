import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { logout } from "../../../../redux/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };
  return (
    <div className="admin__header">
      <Link to="/admin" className="header__logo">
        Lam Sơn Watch
      </Link>
      <div className="header__info">
        <span className="header__info-name">Xin chào, {user?.firstName}</span>
        <Link to="/admin/profile" className="header__info-icon">
          <i className="fa-solid fa-user"></i>
        </Link>
        <button className="header__info-logout" onClick={() => handleLogout()}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span> Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
