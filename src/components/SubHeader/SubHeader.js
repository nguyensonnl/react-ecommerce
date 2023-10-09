import "./SubHeader.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="subheader__container">
      <ul className="subheader__list">
        <li className="subheader__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "subheader__item__link active"
                : "subheader__item__link"
            }
            end
          >
            Trang chủ
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink
            to={`/c/${"63fc7648857357d5e8bca46c"}`}
            className={({ isActive }) =>
              isActive
                ? "subheader__item__link active"
                : "subheader__item__link"
            }
          >
            Đồng hồ nam
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink
            to={`/c/${"63fc7642857357d5e8bca46a"}`}
            className={({ isActive }) =>
              isActive
                ? "subheader__item__link active"
                : "subheader__item__link"
            }
          >
            Đồng hồ đôi
          </NavLink>
        </li>

        <li className="subheader__item">
          <NavLink
            to={`/c/${"63fc764d857357d5e8bca46e"}`}
            className={({ isActive }) =>
              isActive
                ? "subheader__item__link active"
                : "subheader__item__link"
            }
          >
            Đồng hồ nữ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(SubHeader);
