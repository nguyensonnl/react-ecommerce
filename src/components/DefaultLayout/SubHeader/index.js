import "./SubHeader.scss";
import { Link } from "react-router-dom";
import policy1 from "../../../assets/img/policy1.png";
import policy2 from "../../../assets/img/policy2.png";
import policy3 from "../../../assets/img/policy3.png";
import Col from "../../Col";
import Row from "../../Row";

const SubHeader = () => {
  return (
    <div className="subheader grid">
      <Row>
        <Col col={3}>
          <div className="subheader__nav">
            <i class="fa-solid fa-list"></i>
            <Link to="/catalog" className="subheader__link">
              <span>Danh mục sản phẩm</span>
            </Link>
          </div>
        </Col>
        <Col col={9}>
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
        </Col>
      </Row>
    </div>
  );
};

export default SubHeader;
