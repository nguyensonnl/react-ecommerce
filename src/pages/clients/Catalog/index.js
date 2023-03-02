import React, { useEffect, useState } from "react";
import Col from "../../../components/Col";
import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import Row from "../../../components/Row";
import ProductCard from "../../../components/ProductCard";
import "./Catalog.scss";
import { Link, parsePath, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../../redux/reducers/productSlice";
import Breadcrumb from "../../../components/Breadcrumb";
import { getAllBrand } from "../../../redux/brandSlice";
import { getCategoryById } from "../../../redux/categorySlice";
import CheckBox from "../../../components/CheckBox";
import { useCallback } from "react";

const prices = [
  { id: 1, title: "Giá dưới 1.000.000đ", value: "0-1000" },
  { id: 2, title: "1.000.000đ - 2.000.000đ", value: "1000-2000" },
  { id: 3, title: "2.000.000đ - 3.000.000đ", value: "2000-3000" },
  { id: 4, title: "3.000.000đ - 5.000.000đ", value: "3000-5000" },
  { id: 5, title: "5.000.000đ - 7.000.000đ", value: "5000-7000" },
  { id: 6, title: "7.000.000đ - 10.000.000đ", value: "7000-10000" },
  { id: 7, title: "10.000.000đ - 20.000.000đ", value: "10000-20000" },
  { id: 8, title: "20.000.000đ - 30.000.000đ", value: "20000-30000" },
  { id: 9, title: "Giá trên 30.000.000đ", value: "30000+" },
];

const Catalog = () => {
  const productByCate = useSelector((state) => state.product.productByCate);
  const [products, setProducts] = useState(productByCate);
  const brands = useSelector((state) => state.brand.brands);
  const categoryId = useSelector((state) => state.category.categoriesId);
  const dispatch = useDispatch();
  const { cate } = useParams(); //id category

  useEffect(() => {
    dispatch(getProductByCategory(cate));
    dispatch(getAllBrand());
    dispatch(getCategoryById(cate));
  }, []);

  //other old
  const [filterBrand, setFilterBrand] = useState([]);

  const [filterPrice, setFilterPrice] = useState([]);

  const handleFilter = (checked, item) => {
    if (checked) {
      setFilterBrand([...filterBrand, item.name]);
    } else {
      setFilterBrand(filterBrand.filter((brand) => brand !== item.name));
    }
  };

  const filterProduct = products.filter((listProduct) =>
    filterBrand.length > 0
      ? filterBrand.includes(listProduct.brand.name)
      : productByCate
  );
  //end other old

  //Other way filter
  const initFilter = {
    brand: [],
    price: [],
  };

  const [filter, setFilter] = useState(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productByCate;

    if (filter.brand.length > 0) {
      temp = temp.filter((e) => filter.brand.includes(e.brand.name));
    }

    if (filter.price.length > 0) {
      // temp = temp.filter((e) => {
      //   if (filter.price.includes("0-1000")) {
      //     return e.price < 1000000;
      //   } else if (filter.price.includes("1000-2000")) {
      //     return e.price > 1000000 && e.price < 2000000;
      //   } else if (filter.price.includes("2000-3000")) {
      //     return e.price > 2000000 && e.price < 3000000;
      //   } else if (filter.price.includes("3000-5000")) {
      //     return e.price > 3000000 && e.price < 5000000;
      //   } else if (filter.price.includes("5000-7000")) {
      //     return e.price > 5000000 && e.price < 7000000;
      //   } else if (filter.price.includes("7000-10000")) {
      //     return e.price > 7000000 && e.price < 10000000;
      //   } else if (filter.price.includes("10000-20000")) {
      //     return e.price > 10000000 && e.price < 20000000;
      //   } else if (filter.price.includes("20000-30000")) {
      //     return e.price > 20000000 && e.price < 3000000;
      //   } else if (filter.price.includes("30000+")) {
      //     return e.price > 30000000;
      //   }
      // });

      temp = temp.filter((e) => {
        return filter.price.some((item) => {
          if (item === "0-1000") {
            return e.price < 1000000;
          } else if (item === "1000-2000") {
            return e.price > 1000000 && e.price < 2000000;
          } else if (item === "2000-3000") {
            return e.price > 2000000 && e.price < 3000000;
          } else if (item === "3000-5000") {
            return e.price > 3000000 && e.price < 5000000;
          } else if (item === "5000-7000") {
            return e.price > 5000000 && e.price < 7000000;
          } else if (item === "7000-10000") {
            return e.price > 7000000 && e.price < 10000000;
          } else if (item === "10000-20000") {
            return e.price > 10000000 && e.price < 20000000;
          } else if (item === "20000-30000") {
            return e.price > 20000000 && e.price < 3000000;
          } else if (item === "30000+") {
            return e.price > 30000000;
          }
        });
      });

      // temp = temp.filter((e) => {
      //   // const check = e.price.find((price) => filter.price.includes(price));
      //   // return check !== undefined;
      // });
    }

    setProducts(temp);
  }, [filter, productByCate]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterSelect = (type, checked, item) => {
    //check
    if (checked) {
      switch (type) {
        case "BRAND":
          setFilter({ ...filter, brand: [...filter.brand, item.name] });
          break;
        case "PRICE":
          setFilter({ ...filter, price: [...filter.price, item.value] });
          break;
        default:
      }
    }
    //uncheck
    else {
      switch (type) {
        case "BRAND":
          const newBrand = filter.brand.filter((e) => e !== item.name);
          setFilter({ ...filter, brand: newBrand });
          break;
        case "PRICE":
          const newPrice = filter.price.filter((e) => e !== item.value);
          setFilter({ ...filter, price: newPrice });
          break;
        default:
      }
    }
  };
  //end other way

  return (
    <Helmet title="Sản phẩm">
      <Grid>
        <Breadcrumb title={categoryId.name} />
        <Row>
          <Col col={3}>
            <div className="catalog section-m1" style={{ marginRight: "20px" }}>
              <div className="catalog__list">
                <p className="catalog__list-title">Thương hiệu</p>
                {brands &&
                  brands.length > 0 &&
                  brands.map((item, index) => (
                    <div className="catalog__list-item" key={index}>
                      {/* <input type="checkbox" className="catalog__list-check" />
                      <span className="catalog__list-name">{item.name}</span> */}
                      {/* <CheckBox
                        label={item.name}
                        onChange={(input) => handleFilter(input.checked, item)}
                        checked={filterBrand.includes(item.name)}
                      /> */}
                      <CheckBox
                        label={item.name}
                        onChange={(input) =>
                          filterSelect("BRAND", input.checked, item)
                        }
                        checked={filter.brand.includes(item.name)}
                      />
                    </div>
                  ))}
              </div>

              <div className="catalog__list">
                <p className="catalog__list-title">Khoảng giá</p>
                {/* <div className="catalog__list-body">
                  <div className="catalog__list-body-search">
                    <input type="text" value="0" />
                    <span> - </span>
                    <input type="text" value="0" />
                  </div>
                  <button type="button" className="catalog__list-body-btn">
                    Áp dụng
                  </button>
                </div> */}
                {prices &&
                  prices.length > 0 &&
                  prices.map((item, index) => (
                    <div className="catalog__list-item" key={index}>
                      {/* <input type="checkbox" className="catalog__list-check" />
                      <span className="catalog__list-name">{item.name}</span> */}
                      <CheckBox
                        label={item.title}
                        onChange={(input) =>
                          filterSelect("PRICE", input.checked, item)
                        }
                        checked={filter.price.includes(item.value)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </Col>
          <Col col={9}>
            <div className="section-m1">
              <div className="catalog__title">{categoryId.name}</div>

              <div className="catalog__filter">
                <span>Sắp xếp:</span>
                <button>Phổ biến</button>
                <button>Mới nhất</button>
                <button>Bán chạy</button>
                <select className="catalog__filter-select">
                  <option>Giá từ thấp đến cao</option>
                  <option>Giá từ cao đến thấp</option>
                </select>
              </div>
              <Row>
                {products.map((item, index) => (
                  <Col col={`${12}-${5}`}>
                    <ProductCard
                      key={index}
                      name={item.name}
                      price={item.price.toLocaleString()}
                      brand={item.brand}
                      src={item.image}
                    />
                  </Col>
                ))}
              </Row>

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
