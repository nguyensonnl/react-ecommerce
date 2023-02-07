import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col";
import Row from "../Row";
import "./Hero.scss";

const HeroSlider = () => {
  return (
    <div className="slider grid">
      <Row>
        <Col col={3}>
          <ul className="slider__category">
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Trang chủ
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Thương hiệu
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Sản phẩm nổi bật
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Sản phẩm bán chạy
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ nam
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ nữ
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ đôi
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ cơ
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ pin
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ dây da
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Đồng hồ dây thép
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Phụ kiện đồng hồ
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Giới thiệu
              </Link>
            </li>
            <li className="slider__category-item">
              <Link to="" className="slider__category-link">
                Liên hệ
              </Link>
            </li>
          </ul>
        </Col>
        <Col col={9}>
          <div className="hero-slider">
            <h4>Giao dịch trong ưu đãi</h4>
            <h2>Ưu đãi siêu giá trị</h2>
            <h1>Trên tất cả sản phẩm</h1>
            <p>Tiết kiệm nhiều hơn với phiếu giảm giá & giảm tới 70%</p>
            <button className="hero-slider__btn">Mua ngay</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSlider;
