import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Grid from "../../Grid";
import "./Header.scss";
import logo from "../../../assets/img/logo-dong-ho.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/customerSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);

  const query = new URLSearchParams({
    search: searchText,
  }).toString();

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  //const newSearch = `/product-search/${searchText}`;
  const newSearch = `/product-search?${query}`;
  const handleSearchForm = (e) => {
    e.preventDefault();
    setSearchText("");
    if (!searchText) {
      return;
    }
    navigate(newSearch);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <section className="header">
      <div className="header__main grid">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>

        <form onSubmit={handleSearchForm} className="header__search">
          <input
            type="text"
            placeholder="Nhập tên hoặc mã sản phẩm bạn muốn tìm kiếm"
            className="header__search-input form-control"
            value={searchText}
            onChange={(e) => handleSearchInput(e)}
          />
          <button className="header__search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <ul className="header__list">
          <li className="header__list-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>Gọi mua hàng</p>
              <Link className="header__list-link">
                <strong>0825 247 999</strong>
              </Link>
            </div>
          </li>
          <li className="header__list-item">
            <i className="fa-solid fa-location-dot"></i>
            <Link className="header__list-link system-shop">
              Hệ thống cửa hàng
            </Link>
          </li>
          <li className="header__list-item">
            <i className="fa-regular fa-user"></i>
            {isLoggedIn ? (
              <div className="header__account">
                <Link to="/account" className="header__list-link">
                  Tài khoản
                </Link>
                <Link
                  to=""
                  className="header__list-link"
                  onClick={() => handleLogout()}
                >
                  Đăng xuất
                </Link>
              </div>
            ) : (
              <div className="header__account">
                <Link to="/account/login" className="header__list-link">
                  Tài khoản
                </Link>
                <Link to="/account/login" className="header__list-link">
                  Đăng nhập
                </Link>
              </div>
            )}
          </li>
          <li className="header__list-item header__list-item--cart">
            <Link to="/cart" className="header__list-link">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Giỏ hàng</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
