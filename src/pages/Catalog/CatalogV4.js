import "./Catalog.scss";
import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import brandService from "../../api/brandService";
import categoryService from "../../api/categoryService";
import { listPriceNew } from "../../constants/index";
import axiosClient from "../../api/axiosClient";
import productService from "../../api/productService";

/**
 * call api by field: brand, category
 * call api: filter by: price
 * call api: sort: price min, price max, createdAt
 */

/**
 * Tạo state lưu query params
 * Cập nhật lại query mỗi khi query params thay đổi
 */

const CatalogV4 = () => {
  const { cate } = useParams();
  const [brands, setBrands] = useState();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [filterdProducts, setFilterProducts] = useState();
  const [filterdBrand, setFitlerBrand] = useState(null);
  const [sort, setSort] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  let query = `/products?categories=${cate}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resBrand, resCategory, resProduct] = await Promise.all([
          brandService.getAllBrand(),
          categoryService.getCategoryById(cate),
          axiosClient.get(query),
        ]);

        setBrands(resBrand.data);
        setCategory(resCategory.data);
        setProducts(resProduct.data.data.productList);
        setFilterProducts(resProduct.data.data.productList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cate]);

  useEffect(() => {
    const getProduct = async () => {
      if (filterdBrand) {
        query += `&brand=${filterdBrand}`;
      }

      if (sort) {
        query += `&sort=${sort}`;
      }

      if (minPrice && maxPrice) {
        query += `&price_min=${+minPrice}&price_max=${+maxPrice}`;
      }

      const resProductCate = await axiosClient.get(query);
      setFilterProducts(resProductCate.data.data.productList);
    };
    getProduct();
  }, [filterdBrand, sort, maxPrice, minPrice]);

  const handleClearFilter = () => {
    setFilterProducts(products);
    setFitlerBrand(null);
    setSort(null);
  };

  const handleFilterBrand = (idBrand) => {
    setFitlerBrand(idBrand);
  };

  const handleFilterPrice = (item) => {
    if (item.value === "0-2000") {
      setMinPrice(1);
      setMaxPrice(2000000);
    }
    if (item.value === "2000-5000") {
      setMinPrice(2000000);
      setMaxPrice(5000000);
    }
    if (item.value === "5000-10000") {
      setMinPrice(5000000);
      setMaxPrice(10000000);
    }
    if (item.value === "10000-20000") {
      setMinPrice(10000000);
      setMaxPrice(20000000);
    }
    if (item.value === "20000-50000") {
      setMinPrice(20000000);
      setMaxPrice(50000000);
    }
    if (item.value === "50000+") {
      setMinPrice(50000000);
      setMaxPrice(1000000000);
    }
  };

  // const handleFilterPrice = (item) => {
  //   let temp = products;
  //   temp = temp.filter((pro) => {
  //     if (item.value === "0-2000") {
  //       return pro.price < 2000000;
  //     } else if (item.value === "2000-5000") {
  //       return pro.price > 2000000 && pro.price < 5000000;
  //     } else if (item.value === "5000-10000") {
  //       return pro.price > 5000000 && pro.price < 10000000;
  //     } else if (item.value === "10000-20000") {
  //       return pro.price > 10000000 && pro.price < 20000000;
  //     } else if (item.value === "20000-50000") {
  //       return pro.price > 20000000 && pro.price < 50000000;
  //     } else if (item.value === "50000+") {
  //       return pro.price > 50000000;
  //     }
  //   });
  //   setProducts(temp);
  // };

  const handleSort = (type) => {
    if (type === "Increase") {
      setSort("price");
    }

    if (type === "Decrease") {
      setSort("-price");
    }

    if (type === "New") {
      setSort("-createdAt");
    }
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
                    <span
                      className="product__cate-title"
                      onClick={() => handleFilterBrand(item._id)}
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
                      }s
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
              onClick={() => handleClearFilter()}
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
            {filterdProducts &&
              filterdProducts.length > 0 &&
              filterdProducts.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CatalogV4;
