import "./Breadcrumb.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, title2, className }) => {
  return (
    <ul className={`breadcrumb ${className}`}>
      <li className="">
        <Link to="/" className="breadcrumb-link sub">
          Trang chủ
        </Link>
        <span>/</span>
      </li>
      <li>
        <span>{title2}</span>
        <span>/</span>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};

export default Breadcrumb;
