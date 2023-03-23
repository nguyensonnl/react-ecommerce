import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Grid from "../../Grid";
import "./Header.scss";
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
      <div className="header__content grid">
        <Link to="/" className="header__logo">
          <div className="header__show">Show</div>
          <div className="header__brand">
            <div className="logo__brand">LSW</div>
            <div className="logo__brand-sub">LAM SON WATCH</div>
          </div>
        </Link>

        <div className="header__search">
          <form onSubmit={handleSearchForm} className="header__search-form">
            <input
              type="text"
              placeholder="Nhập sản phẩm bạn muốn tìm kiếm"
              className="form__input form-control"
              value={searchText}
              onChange={(e) => handleSearchInput(e)}
            />
            <button className="form__btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="header__info">
          <ul className="header__list">
            <li className="header__list-item header__list-item--hiden">
              <i className="fa-solid fa-phone"></i>
              <div>
                <p>Gọi mua hàng</p>
                <Link className="header__list-link">
                  <strong>0376 940 314</strong>
                </Link>
              </div>
            </li>
            <li className="header__list-item header__list-item--hiden">
              <i className="fa-solid fa-location-dot"></i>
              <Link className="header__list-link">
                Hệ thống<br></br>cửa hàng
              </Link>
            </li>
            <li className="header__list-item header__list-item--hiden">
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
                  <Link
                    to="/account/login"
                    className="header__list-link header__list-link--auth"
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </li>
            <li className="header__list-item">
              <Link
                to="/cart"
                className="header__list-link header__list-item--cart header__list-link--hover"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Giỏ hàng</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
