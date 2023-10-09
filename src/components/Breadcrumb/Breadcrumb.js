import { Link } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = ({ title, title2, className }) => {
  return (
    <ul className={`breadcrumb ${className ? className : ""}`}>
      <li>
        <Link to="/" className="breadcrumb-link sub">
          Trang chủ
        </Link>
      </li>
      <li>
        <span className="icon">&gt;</span>
      </li>
      {title2 && (
        <>
          <li>
            <span className="sub">{title2}</span>
          </li>
          <li>
            <span className="icon">&gt;</span>
          </li>
        </>
      )}
      <li>
        <span>{title}</span>
      </li>
    </ul>
  );
};

export default Breadcrumb;
