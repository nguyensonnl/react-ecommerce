import "./Breadcrumb.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, className }) => {
  return (
    <ul className={`breadcrumb ${className}`}>
      <li className="">
        <Link to="/" className="breadcrumb-link sub">
          Trang chủ
        </Link>
        <span>/</span>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};

export default Breadcrumb;
