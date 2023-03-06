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
import Pagination from "../../../components/Pagination";

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
  const dispatch = useDispatch();
  const productByCate = useSelector((state) => state.product.productByCate);
  const brands = useSelector((state) => state.brand.brands);
  const categoryId = useSelector((state) => state.category.categoriesId);
  const { cate } = useParams(); //id category
  const [products, setProducts] = useState(productByCate);

  //Pagination
  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const lastPostIndex = curentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  const [activeId, setActiveId] = useState(1);

  let pages = [];

  const lenghtPagination = Math.ceil(productByCate.length / postsPerPage);
  for (let i = 1; i <= lenghtPagination; i++) {
    pages.push(i);
  }

  const previousPage = () => {
    if (curentPage !== 1) {
      setCurrentPage(curentPage - 1);
      setActiveId(curentPage - 1);
    }
  };

  const nextPage = () => {
    if (curentPage !== Math.ceil(productByCate.length / postsPerPage)) {
      setCurrentPage(curentPage + 1);
      setActiveId(curentPage + 1);
    }
  };
  //End Pagination

  useEffect(() => {
    dispatch(getProductByCategory(cate));
    dispatch(getAllBrand());
    dispatch(getCategoryById(cate));
  }, []);

  //Other way filter
  const [filters, setFilters] = useState({
    brand: [],
    price: [],
  });

  // const filteredProducts = productByCate.filter((product) => {
  //   if (filters.brand.length > 0) {
  //     return filters.brand.includes(product.brand.name);
  //   }
  //   if (filters.price.length > 0) {
  //     return filters.price.some((item) => {
  //       if (item === "0-1000") {
  //         return product.price < 1000000;
  //       } else if (item === "1000-2000") {
  //         return product.price > 1000000 && product.price < 2000000;
  //       } else if (item === "2000-3000") {
  //         return product.price > 2000000 && product.price < 3000000;
  //       } else if (item === "3000-5000") {
  //         return product.price > 3000000 && product.price < 5000000;
  //       } else if (item === "5000-7000") {
  //         return product.price > 5000000 && product.price < 7000000;
  //       } else if (item === "7000-10000") {
  //         return product.price > 7000000 && product.price < 10000000;
  //       } else if (item === "10000-20000") {
  //         return product.price > 10000000 && product.price < 20000000;
  //       } else if (item === "20000-30000") {
  //         return product.price > 20000000 && product.price < 3000000;
  //       } else if (item === "30000+") {
  //         return product.price > 30000000;
  //       }
  //     });
  //   }
  //   return products;
  // });

  // useEffect(() => {
  //   if (filteredProducts) {
  //     setProducts(filteredProducts.slice(firstPostIndex, lastPostIndex));
  //   } else {
  //     setProducts(productByCate.slice(firstPostIndex, lastPostIndex));
  //   }
  // }, [curentPage, filters, productByCate]);

  const updateProducts = useCallback(() => {
    //let temp = productByCate;
    let temp = productByCate;

    if (filters.brand.length > 0) {
      temp = temp.filter((e) => filters.brand.includes(e.brand.name));
    }

    if (filters.price.length > 0) {
      temp = temp.filter((e) => {
        return filters.price.some((item) => {
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
    }

    setProducts(temp);
  }, [filters, productByCate, curentPage]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  //handleChangeFilter
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "BRAND":
          setFilters({ ...filters, brand: [...filters.brand, item.name] });
          break;
        case "PRICE":
          setFilters({ ...filters, price: [...filters.price, item.value] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "BRAND":
          const newBrand = filters.brand.filter((e) => e !== item.name);
          setFilters({ ...filters, brand: newBrand });
          break;
        case "PRICE":
          const newPrice = filters.price.filter((e) => e !== item.value);
          setFilters({ ...filters, price: newPrice });
          break;
        default:
      }
    }
  };

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
                        checked={filters.brand.includes(item.name)}
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
                        checked={filters.price.includes(item.value)}
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
                <ul className="catalog__list">
                  <li className="catalog__item">
                    <Link to="" className="catalog__link">
                      Tên A &#10141; Z
                    </Link>
                  </li>
                  <li className="catalog__item">
                    <Link to="" className="catalog__link">
                      Tên Z &#10141; A
                    </Link>
                  </li>
                  <li className="catalog__item">
                    <Link to="" className="catalog__link">
                      Giá tăng dần
                    </Link>
                  </li>
                  <li className="catalog__item">
                    <Link to="" className="catalog__link">
                      Giá giảm dần
                    </Link>
                  </li>
                  <li className="catalog__item">
                    <Link to="" className="catalog__link">
                      Hàng mới
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="list__product-catalog">
                <Row>
                  {currentPosts.map((item, index) => (
                    <Col col={`${12}-${5}`}>
                      <ProductCard
                        id={item._id}
                        key={index}
                        name={item.name}
                        price={item.price.toLocaleString()}
                        brand={item.brand}
                        src={item.image}
                      />
                    </Col>
                  ))}
                </Row>
              </div>

              {/*pages.lengh>1*/}
              {products.length === 0 && (
                <div className="catalog__empty-product">
                  Không có sản phẩm nào bạn cần tìm
                </div>
              )}

              <Pagination
                totalPosts={products.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                previousPage={previousPage}
                nextPage={nextPage}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    </Helmet>
  );
};

export default Catalog;
