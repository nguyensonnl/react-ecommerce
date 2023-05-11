import "./SubHeader.scss";
import { Link } from "react-router-dom";
import policy1 from "../../../assets/img/policy1.png";
import policy2 from "../../../assets/img/policy2.png";
import policy3 from "../../../assets/img/policy3.png";

const SubHeader = () => {
  return (
    <div className="subheader grid">
      <div className="row">
        <div className="col-3">
          <div className="subheader__nav">
            <i className="fa-solid fa-list"></i>
            <span>Danh mục sản phẩm</span>
          </div>
        </div>
        <div className="col-9">
          <ul className="subheader__policies-shop">
            <li className="subheader__item">
              <img src={policy1} className="subheader__img" />
              <Link to="" className="subheader__link">
                Hưỡng dẫn thanh toán
              </Link>
            </li>
            <li className="subheader__item">
              <img src={policy2} className="subheader__img" />
              <Link to="" className="subheader__link">
                Hưỡng dẫn mua online
              </Link>
            </li>
            <li className="subheader__item">
              <img src={policy3} className="subheader__img" />
              <Link to="" className="subheader__link">
                Hưỡng dẫn mua trả góp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
