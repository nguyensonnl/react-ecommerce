import "./SubHeader.scss";
import { NavLink } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="subheader">
      <ul className="subheader__group">
        <li className="subheader__item">
          <NavLink to="/" className="subheader__item-link">
            Trang chủ
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink
            to={`/danh-muc/${"63fc7648857357d5e8bca46c"}`}
            className="subheader__item-link"
          >
            Đồng hồ nam
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink
            to={`/danh-muc/${"63fc7642857357d5e8bca46a"}`}
            className="subheader__item-link"
          >
            Đồng hồ đôi
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink
            to={`/danh-muc/${"63fc764d857357d5e8bca46e"}`}
            className="subheader__item-link"
          >
            Đồng hồ nữ
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink to="/about" className="subheader__item-link">
            Giới thiệu
          </NavLink>
        </li>
        <li className="subheader__item">
          <NavLink to="/contact" className="subheader__item-link">
            Liên hệ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
