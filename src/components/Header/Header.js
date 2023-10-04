import "./Header.scss";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/customerSlice";
import icon1 from "../../assets/img/Menu/menu_icon_1.png";
import icon2 from "../../assets/img/Menu/menu_icon_2.png";
import icon3 from "../../assets/img/Menu/menu_icon_3.png";
import icon4 from "../../assets/img/Menu/menu_icon_4.png";
import icon5 from "../../assets/img/Menu/menu_icon_5.png";
import icon6 from "../../assets/img/Menu/menu_icon_6.png";
import productService from "../../api/productService";
import SubHeader from "../SubHeader/SubHeader";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);
  const cart = useSelector((state) => state.cart);

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
  // const [listCate, setListCate] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await productApi.getCategory();
  //     setListCate(res.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <section className="header__container">
        <div className="header__main grid">
          <Link to="/" className="header__logo">
            {/* Mobile */}
            <div
              className="header__show"
              style={{ color: "#82869e", fontSize: "2.8rem" }}
              onClick={() => setIsShowNav(!isShowNav)}
            >
              <i className="fa-sharp fa-solid fa-bars"></i>
            </div>
            {/* Mobile */}
            <div className="header__logo__title">SWatch</div>
          </Link>

          {/* Mobile */}
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
                    <img
                      src={icon1}
                      alt="icon-home"
                      className="nav__item-icon"
                    />
                    Trang chủ
                  </Link>
                </li>

                <li
                  className="nav__item"
                  onClick={() => {
                    setIsShowNav(!isShowNav);
                  }}
                >
                  <Link
                    to={`/danh-muc/${"63fc7648857357d5e8bca46c"}`}
                    className="nav__item-link"
                  >
                    <img
                      src={icon2}
                      alt="icon-home"
                      className="nav__item-icon"
                    />
                    Đồng hồ nam
                  </Link>
                </li>

                <li
                  className="nav__item"
                  onClick={() => {
                    setIsShowNav(!isShowNav);
                  }}
                >
                  <Link
                    to={`/danh-muc/${"63fc7642857357d5e8bca46a"}`}
                    className="nav__item-link"
                  >
                    <img
                      src={icon4}
                      alt="icon-home"
                      className="nav__item-icon"
                    />
                    Đồng hồ đôi
                  </Link>
                </li>

                <li
                  className="nav__item"
                  onClick={() => {
                    setIsShowNav(!isShowNav);
                  }}
                >
                  <Link
                    to={`/danh-muc/${"63fc764d857357d5e8bca46e"}`}
                    className="nav__item-link"
                  >
                    <img
                      src={icon3}
                      alt="icon-home"
                      className="nav__item-icon"
                    />
                    Đồng hồ nữ
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
          {/* Mobile */}

          <div className="header__search">
            <form onSubmit={handleSearchForm} className="header__search__form">
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
            <ul className="header__info__list">
              <li className="header__list__item">
                <Link to="/cart" className="header__item__link">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Giỏ hàng ({cart.cartTotalQuantity})</span>
                </Link>
              </li>

              <li className="header__list__item header__list-item--hiden">
                <Link className="header__item__link">
                  <i className="fa-solid fa-phone"></i>
                  <span>
                    <span>Hotline mua hàng</span>
                    <span className="span__color">0376 940 314</span>
                  </span>
                </Link>
              </li>

              <li className="header__list__item header__list-item--hiden">
                <i className="fa-regular fa-user"></i>
                {isLoggedIn && (
                  <div className="header__account">
                    <Link to="/account" className="header__item__link">
                      <span>Tài khoản</span>
                    </Link>
                    <Link
                      className="header__list-link span__color"
                      onClick={() => handleLogout()}
                    >
                      <span className="span__color">Đăng xuất</span>
                    </Link>
                  </div>
                )}

                {!isLoggedIn && (
                  <div className="header__account">
                    <Link to="/account/login" className="header__item__link">
                      <span>Tài khoản</span>
                    </Link>
                    <Link
                      to="/account/login"
                      className="header__item__link header__list-link--auth"
                    >
                      <span className="span__color">Đăng nhập</span>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <SubHeader />
      </section>
    </>
  );
};

export default Header;
