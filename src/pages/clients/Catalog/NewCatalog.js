import "./Catalog.scss";
import React, { useEffect, useState } from "react";
import Helmet from "../../../components/Helmet";
import ProductCard from "../../../components/ProductCard";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../../redux/reducers/productSlice";
import Breadcrumb from "../../../components/Breadcrumb";
import { getAllBrand } from "../../../redux/brandSlice";
import { getCategoryById } from "../../../redux/categorySlice";
import CheckBox from "../../../components/CheckBox";
import { useCallback } from "react";
import Pagination from "../../../components/Pagination";
import LoadingSpinner from "../../../components/LoadingSpinner";

const prices = [
  { id: 1, title: "Giá dưới 1 triệu", value: "0-1000" },
  { id: 2, title: "Từ 1 - 2 triệu", value: "1000-2000" },
  { id: 3, title: "Từ 2 - 3 triệu", value: "2000-3000" },
  { id: 4, title: "Từ 3 - 5 triệu", value: "3000-5000" },
  { id: 5, title: "Từ 5 - 7 triệu", value: "5000-7000" },
  { id: 6, title: "Từ 7 - 10 triệu", value: "7000-10000" },
  { id: 7, title: "Từ 10 - 20 triệu", value: "10000-20000" },
  { id: 8, title: "Từ 20 - 30 triệu", value: "20000-30000" },
  { id: 9, title: "Trên 30 triệu", value: "30000+" },
];

const listPriceNew = [
  { id: 1, title: "Dưới 2 triệu", value: "0-2000" },
  { id: 2, title: "Từ 2 - 5 triệu", value: "2000-5000" },
  { id: 3, title: "Từ 5 - 10 triệu", value: "5000-10000" },
  { id: 4, title: "Từ 10 - 20 triệu", value: "10000-20000" },
  { id: 5, title: "Từ 20 - 50 triệu", value: "20000-50000" },
  { id: 6, title: "Trên 50 triệu", value: "50000+" },
];

const NewCatalog = () => {
  const dispatch = useDispatch();
  const productByCate = useSelector((state) => state.product.productByCate);
  const brands = useSelector((state) => state.brand.brands);
  const categoryId = useSelector((state) => state.category.categoriesId);
  const { cate } = useParams(); //id category
  const [products, setProducts] = useState([productByCate]);
  const [isLoading, setIsLoading] = useState(false);

  //Pagination
  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
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

  const handleCLickPaginate = (page) => {
    setCurrentPage(page);
    setActiveId(page);
  };
  //End Pagination

  useEffect(() => {
    dispatch(getProductByCategory(cate));
    dispatch(getAllBrand());
    dispatch(getCategoryById(cate));
    setIsLoading(true);
  }, [cate]);

  //filter only one case
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterPrice, setFilterPrice] = useState([]);

  const handleFilter = (checked, item) => {
    if (checked) {
      setFilterBrand([...filterBrand, item.name]); // para2 is value
    } else {
      setFilterBrand(filterBrand.filter((brand) => brand !== item.name));
    }
  };

  const filterProduct = products.filter((listProduct) =>
    filterBrand.length > 0
      ? filterBrand.includes(listProduct.brand.name)
      : productByCate
  );
  //end

  //Other way filter
  const [filter, setFilter] = useState({
    brand: [],
    price: [],
  });

  const updateProducts = useCallback(() => {
    let temp = productByCate;

    if (filter.brand.length > 0) {
      temp = temp.filter((e) => filter.brand.includes(e.brand.name));
    }

    if (filter.price.length > 0) {
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
    }

    setProducts(temp);
  }, [filter, productByCate, curentPage]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const handleChangePrice = () => {
    if (!priceMin || !priceMax) {
      return;
    }

    let priceMinNum = +priceMin;
    let priceMMaxNum = +priceMax;
    let temp = products;

    temp = temp.filter(
      (e) => e.price >= priceMinNum && e.price <= priceMMaxNum
    );
    setProducts(temp);
  };

  const handleClearPrice = () => {
    setPriceMax("");
    setPriceMin("");
    let temp = productByCate;
    setProducts(temp);
    setFilter({
      brand: [],
      price: [],
    });
  };

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

  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const handleFilterPrice = (item) => {
    let temp = productByCate;
    temp = temp.filter((pro) => {
      if (item.value === "0-2000") {
        return pro.price < 2000000;
      } else if (item.value === "2000-5000") {
        return pro.price > 2000000 && pro.price < 5000000;
      } else if (item.value === "5000-10000") {
        return pro.price > 5000000 && pro.price < 10000000;
      } else if (item.value === "10000-20000") {
        return pro.price > 10000000 && pro.price < 20000000;
      } else if (item.value === "20000-50000") {
        return pro.price > 20000000 && pro.price < 50000000;
      } else if (item.value === "50000+") {
        return pro.price > 50000000;
      }
    });
    setProducts(temp);
  };

  const handleFilterBrand = (item) => {
    let temp = [...productByCate];
    temp = temp.filter((pro) => pro.brand._id === item._id);
    setProducts(temp);
  };

  const handleSort = (type) => {
    let temp = [...productByCate];

    if (type === "Increase") {
      temp.sort((a, b) => a.price - b.price);
    }

    if (type === "Decrease") {
      temp.sort((a, b) => a.price - b.price).reverse();
    }

    if (type === "New") {
      temp.sort((a, b) => a.createdAt - b.createdAt).reverse();
    }
    setProducts(temp);
    console.log(products);
  };

  return (
    <Helmet title={categoryId.name}>
      <section className="grid">
        <Breadcrumb title={categoryId.name} />

        <div className="catalog__product__filter">
          <div className="filter__group">
            <div className="filter__list">
              {brands &&
                brands.length > 0 &&
                brands.map((item, index) => (
                  <div className="filter__item" key={index}>
                    {/* <CheckBox
                      label={item.name}
                      onChange={(input) =>
                        filterSelect("BRAND", input.checked, item)
                      }
                      checked={filter.brand.includes(item.name)}
                    /> */}

                    <Link
                      className="product__cate-title"
                      onClick={() => handleFilterBrand(item)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          <div className="filter__group">
            <div className="filter__list">
              {listPriceNew &&
                listPriceNew.length > 0 &&
                listPriceNew.map((item, index) => (
                  <div className="filter__item" key={index}>
                    {/* <CheckBox
                      label={item.title}
                      onChange={(input) =>
                        filterSelect("PRICE", input.checked, item)
                      }
                      checked={filter.price.includes(item.value)}
                    /> */}
                    <Link
                      className="product__cate-title price"
                      onClick={() => handleFilterPrice(item)}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
            </div>
          </div>

          <div className="catalog__filter">
            <span style={{ fontSize: "1.5rem" }}>Sắp xếp:</span>
            <ul className="catalog__list">
              <li className="catalog__item">
                <Link
                  className="catalog__link"
                  onClick={() => handleSort("Increase")}
                >
                  Giá tăng dần
                </Link>
              </li>
              <li className="catalog__item">
                <Link
                  className="catalog__link"
                  onClick={() => handleSort("Decrease")}
                >
                  Giá giảm dần
                </Link>
              </li>
              <li className="catalog__item">
                <Link
                  className="catalog__link"
                  onClick={() => handleSort("New")}
                >
                  Hàng mới
                </Link>
              </li>
            </ul>
          </div>

          <div className="catalog__list-body">
            <button
              style={{ margin: "10px 0" }}
              type="button"
              className="catalog__list-body-btn"
              onClick={() => handleClearPrice()}
            >
              Xóa bộ lọc
            </button>
          </div>
        </div>

        <div className="catalog__product__list mb-20">
          <div className="product__category__title">
            <span>{categoryId.name}</span>
          </div>

          <div className="list__product-catalog">
            {currentPosts &&
              currentPosts.length > 0 &&
              currentPosts.map((item, index) => (
                <ProductCard
                  id={item._id}
                  key={index}
                  name={item.name}
                  price={new Intl.NumberFormat().format(item.price)}
                  brand={item.brand}
                  src={item.image}
                  className="card-overide"
                />
              ))}
          </div>

          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            previousPage={previousPage}
            nextPage={nextPage}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          {/*pages.lengh>1*/}
          {/* {products.length === 0 && (
          <div className="catalog__empty-product">
            Không có sản phẩm nào bạn cần tìm
          </div>
        )} */}
        </div>
      </section>
    </Helmet>
  );
};

export default NewCatalog;