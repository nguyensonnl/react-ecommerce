import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/customerSlice";
import productApi from "../../../api/productApi";
import icon1 from "../../../assets/img/Menu/menu_icon_1.png";
import icon2 from "../../../assets/img/Menu/menu_icon_2.png";
import icon3 from "../../../assets/img/Menu/menu_icon_3.png";
import icon4 from "../../../assets/img/Menu/menu_icon_4.png";
import icon5 from "../../../assets/img/Menu/menu_icon_5.png";
import icon6 from "../../../assets/img/Menu/menu_icon_6.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);

  const query = new URLSearchParams({
    q: searchText,
  }).toString();

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  //const newSearch = `/product-search/${searchText}`;
  const newSearch = `/search-results?${query}`;
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

  const [isShowNav, setIsShowNav] = useState(false);
  const [listCate, setListCate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.getCategory();
      setListCate(res.data);
    };
    fetchData();
  }, []);

  return (
    <section className="header">
      <div className="header__content grid">
        <Link to="/" className="header__logo">
          <div
            className="header__show"
            style={{ color: "#fff", fontSize: "2.8rem" }}
            onClick={() => setIsShowNav(!isShowNav)}
          >
            <i className="fa-sharp fa-solid fa-bars"></i>
          </div>
          <div className="header__brand">
            <div className="logo__brand">LSW</div>
            <div className="logo__brand-sub">LAM SON WATCH</div>
          </div>
        </Link>

        {isShowNav && (
          <div className="nav-mobile">
            <div className="nav-mobile__login">
              <i className="fa-solid fa-circle-user icon"></i>
              <div className="account">
                <div className="title">Tài khoản</div>
                <Link to="/account/login" className="account__link">
                  Đăng nhập
                </Link>
              </div>
            </div>
            <ul className="nav__list scroll">
              <li
                className="nav__item"
                onClick={() => {
                  setIsShowNav(!isShowNav);
                }}
              >
                <Link to="/" className="nav__item-link">
                  <img src={icon1} alt="icon-home" className="nav__item-icon" />
                  Trang chủ
                </Link>
              </li>

              {listCate.map((item) => (
                <li
                  className="nav__item"
                  key={item._id}
                  onClick={() => {
                    setIsShowNav(!isShowNav);
                  }}
                >
                  <Link to={`/danh-muc/${item._id}`} className="nav__item-link">
                    <img
                      src={icon2}
                      alt="icon-home"
                      className="nav__item-icon"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}

              <li
                className="nav__item"
                onClick={() => {
                  setIsShowNav(!isShowNav);
                }}
              >
                <Link to="/about" className="nav__item-link">
                  <img src={icon5} alt="icon-home" className="nav__item-icon" />
                  Giới thiệu
                </Link>
              </li>
              <li
                className="nav__item"
                onClick={() => {
                  setIsShowNav(!isShowNav);
                }}
              >
                <Link to="/contact" className="nav__item-link">
                  <img src={icon6} alt="icon-home" className="nav__item-icon" />
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        )}

        {isShowNav && (
          <div
            className="overlay-nav"
            onClick={() => setIsShowNav(!isShowNav)}
          ></div>
        )}

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
