import React from "react";
import Col from "../../../components/Col";
import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import Row from "../../../components/Row";
import ProductCard from "../../../components/ProductCard";
import "./Catalog.scss";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <Helmet title="Sản phẩm">
      <Grid>
        <Row>
          <Col col={2}>
            <div className="catalog section-m1">
              <h3 className="catalog__heading">Bộ lọc tìm kiếm</h3>
              <div className="catalog__list">
                <p className="catalog__list-title">Theo danh mục</p>
                <div className="catalog__list-item">
                  <input type="checkbox" className="catalog__list-check" />
                  <span className="catalog__list-name">Đồng hồ nam</span>
                </div>
                <div className="catalog__list-item">
                  <input type="checkbox" className="catalog__list-check" />
                  <span className="catalog__list-name">Đồng hồ nữ</span>
                </div>
                <div className="catalog__list-item">
                  <input type="checkbox" className="catalog__list-check" />
                  <span className="catalog__list-name">Đồng hồ thông minh</span>
                </div>
              </div>

              <div className="catalog__list">
                <p className="catalog__list-title">Theo thương hiệu</p>
                <div className="catalog__list-item">
                  <input type="checkbox" className="catalog__list-check" />
                  <span className="catalog__list-name">Casino</span>
                </div>
                <div className="catalog__list-item">
                  <input type="checkbox" className="catalog__list-check" />
                  <span className="catalog__list-name">Samsung</span>
                </div>
                <div className="catalog__list-item">
                  <input type="checkbox" className="catalog__list-check" />
                  <span className="catalog__list-name">Apple</span>
                </div>
              </div>

              <div className="catalog__list">
                <p className="catalog__list-title">Khoảng giá</p>
                <div className="catalog__list-body">
                  <div className="catalog__list-body-search">
                    <input type="text" value="0" />
                    <span> - </span>
                    <input type="text" value="0" />
                  </div>
                  <button type="button" className="catalog__list-body-btn">
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col col={10}>
            <div className="section-m1">
              <div className="catalog__filter">
                <span>Sắp xếp theo</span>
                <button>Phổ biến</button>
                <button>Mới nhất</button>
                <button>Bán chạy</button>
                <select className="catalog__filter-select">
                  <option>Giá từ thấp đến cao</option>
                  <option>Giá từ cao đến thấp</option>
                </select>
              </div>
              <ProductCard />
              <ul className="catalog__pagination">
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    <i className="fas fa-angle-left catalog__pagination-icon"></i>
                  </Link>
                </li>
                <li className="catalog__pagination-item catalog__pagination-item--active">
                  <Link to="" className="catalog__pagination-link">
                    1
                  </Link>
                </li>
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    2
                  </Link>
                </li>
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    3
                  </Link>
                </li>
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    4
                  </Link>
                </li>
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    5
                  </Link>
                </li>
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    ...
                  </Link>
                </li>
                <li className="catalog__pagination-item">
                  <Link to="" className="catalog__pagination-link">
                    <i className="fas fa-angle-right catalog__pagination-icon"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
    </Helmet>
  );
};

export default Catalog;
