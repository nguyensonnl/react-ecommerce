import { Link } from "react-router-dom";

const Breadcrumb = ({ title, title2, className }) => {
  return (
    <ul className={`breadcrumb ${className ? className : ""}`}>
      <li className="">
        <Link to="/" className="breadcrumb-link sub">
          Trang chủ
        </Link>
        <span className="icon">/</span>
      </li>
      {title2 && (
        <li>
          <span className="sub">{title2}</span>
          <span className="icon">/</span>
        </li>
      )}
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};

export default Breadcrumb;
