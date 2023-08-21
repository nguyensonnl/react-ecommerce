import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";

const SubHeader = () => {
  return (
    <div className="subheader">
      <ul className="subheader__group">
        <li className="subheader__item">
          <Link to="/" className="subheader__item-link">
            Trang chủ
          </Link>
        </li>

        <li className="subheader__item">
          <Link
            to={`/danh-muc/${"63fc7648857357d5e8bca46c"}`}
            className="subheader__item-link"
          >
            Đồng hồ nam
          </Link>
        </li>

        <li className="subheader__item">
          <Link
            to={`/danh-muc/${"63fc7642857357d5e8bca46a"}`}
            className="subheader__item-link"
          >
            Đồng hồ đôi
          </Link>
        </li>

        <li className="subheader__item">
          <Link
            to={`/danh-muc/${"63fc764d857357d5e8bca46e"}`}
            className="subheader__item-link"
          >
            Đồng hồ nữ
          </Link>
        </li>

        <li className="subheader__item">
          <Link to="/about" className="subheader__item-link">
            Giới thiệu
          </Link>
        </li>
        <li className="subheader__item">
          <Link to="/contact" className="subheader__item-link">
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
