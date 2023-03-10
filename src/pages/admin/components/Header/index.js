import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { logout } from "../../../../redux/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const firstName = user?.firstName;
  const lastName = user?.lastName;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };
  return (
    <div className="header__admin">
      <div className="header__right">
        <div className="header__admin__name">
          Xin chào, {firstName} {lastName}
        </div>
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
