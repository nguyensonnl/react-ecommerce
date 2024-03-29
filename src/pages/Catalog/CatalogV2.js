import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import { useCallback } from "react";
import Pagination from "../../components/Pagination";
import "./Catalog.scss";
import brandService from "../../api/brandService";
import categoryService from "../../api/categoryService";
import productService from "../../api/productService";
import { listPriceNew } from "../../constants/index";
import axiosClient from "../../api/axiosClient";

/**
 *
 * Cần 1 biến khác để lưu các danh sách đã lọc
 * Link filter khớp với link call api
 *
 * Call api data
 */

const CatalogV2 = () => {
  const { cate } = useParams(); //id category
  //const productByCate = useSelector((state) => state.product.productByCate);
  //Thay vì mình lấy sản phẩm của productByCate bằng redux, thì mình set product by call api
  //const brands = useSelector((state) => state.brand.brands);
  //const categoryId = useSelector((state) => state.category.categoriesId);

  const [brands, setBrands] = useState();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resBrand, resCategory, resProductCate] = await Promise.all([
          brandService.getAllBrand(),
          categoryService.getCategoryById(cate),
          axiosClient.get(`/products?categories=${cate}`),
        ]);

        setBrands(resBrand.data);
        setCategory(resCategory.data);
        setProducts(resProductCate.data.data.productList);
        setFilteredProducts(resProductCate.data.data.productList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cate]);

  // const [products, setProducts] = useState([productByCate]);

  //Pagination
  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const lastPostIndex = curentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  const [activeId, setActiveId] = useState(1);

  const [isActiveLink, setIsActiveLink] = useState(false);

  let pages = [];

  const lenghtPagination = Math.ceil(products?.length / postsPerPage);
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
    if (curentPage !== Math.ceil(products.length / postsPerPage)) {
      setCurrentPage(curentPage + 1);
      setActiveId(curentPage + 1);
    }
  };

  const handleCLickPaginate = (page) => {
    setCurrentPage(page);
    setActiveId(page);
  };
  //End Pagination

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axiosClient.get(`/products?categories=${cate}`);
  //       setProducts(res.data.data.productList);
  //       setFilteredProducts(res.data.data.productList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [cate]);

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

  const filterProduct = products?.filter((listProduct) =>
    filterBrand.length > 0
      ? filterBrand.includes(listProduct.brand.name)
      : products
  );
  //end

  //Other way filter
  const [filter, setFilter] = useState({
    brand: [],
    price: [],
  });

  const updateProducts = useCallback(() => {
    //let temp = productByCate;
    let temp = products;

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
  }, [filter, curentPage]);

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
    //let temp = productByCate;

    setProducts(products);
    setFilteredProducts(products);
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
    //let temp = productByCate;
    let temp = products;
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
    setFilteredProducts(temp);
  };

  // const handleFilterBrand = useCallback(
  //   (item) => {
  //     let temp = [...products];
  //     temp = temp.filter((pro) => pro.brand._id === item._id);
  //     console.log(temp);
  //     //setProducts(temp);
  //   },
  //   [products]
  // );

  const handleFilterBrand = useCallback(
    (item) => {
      let temp = products.filter((pro) => pro.brand._id === item._id);
      setFilteredProducts(temp);
    },
    [products]
  );

  const handleSort = (type) => {
    let temp = [...products];

    if (type === "Increase") {
      temp.sort((a, b) => a.price - b.price);
    }

    if (type === "Decrease") {
      temp.sort((a, b) => a.price - b.price).reverse();
    }

    if (type === "New") {
      temp.sort((a, b) => a.createdAt - b.createdAt).reverse();
    }
    setFilteredProducts(temp);
  };

  return (
    <Helmet title={category?.name}>
      <section className="grid">
        <Breadcrumb title={category?.name} />

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

                    <span
                      className="product__cate-title"
                      onClick={() => handleFilterBrand(item)}
                    >
                      {item.name}
                    </span>
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
                    <span
                      className="product__cate-title price"
                      onClick={() => handleFilterPrice(item)}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          <div className="catalog__filter">
            <span style={{ fontSize: "1.5rem" }}>Sắp xếp:</span>
            <ul className="catalog__list">
              <li className="catalog__item">
                <span
                  className="catalog__link"
                  onClick={() => handleSort("Increase")}
                >
                  Giá tăng dần
                </span>
              </li>
              <li className="catalog__item">
                <span
                  className="catalog__link"
                  onClick={() => handleSort("Decrease")}
                >
                  Giá giảm dần
                </span>
              </li>
              <li className="catalog__item">
                <span
                  className="catalog__link"
                  onClick={() => handleSort("New")}
                >
                  Hàng mới
                </span>
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
            <span>{category?.name}</span>
          </div>

          <div className="list__product-catalog">
            {currentPosts &&
              currentPosts.length > 0 &&
              currentPosts.map((item) => (
                <ProductCard
                  key={item._id}
                  product={item}
                  className="card-overide"
                />
              ))}
          </div>

          <Pagination
            totalPosts={products?.length}
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

export default CatalogV2;
