import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "../../Grid";
import "./Header.scss";
import logo from "../../../assets/img/logo-dong-ho.png";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchForm = (e) => {
    e.preventDefault();
    setSearchText("");
    navigate(`/search/${searchText}`);
  };

  return (
    <section className="header">
      {/* <div className="header__navbar">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
              alt=""
              className="header__logo"
            />
          </Link>

          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <Link to="/" className="header__navbar-link">
                Home
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/catalog" className="header__navbar-link">
                Shop
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                Blog
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                About
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="header__navbar-right">
            <form
              onSubmit={handleSearch}
              className="header__navbar-item-search"
            >
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="header__navbar-item-input"
              />
              <button type="submit" className="header__navbar-item-btn">
                <i className="fa-solid fa-magnifying-glass header__navbar-item-icon"></i>
              </button>
            </form>

            <li className="header__navbar-item">
              <Link to="/cart" className="header__navbar-link">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>

            <li className="header__navbar-item">
              <Link to="/login" className="header__navbar-link">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </ul>
        </div> */}
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
            <Link to="/login" className="header__list-link">
              <p>Tài khoản</p>
              <small>Đăng nhập</small>
            </Link>
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
