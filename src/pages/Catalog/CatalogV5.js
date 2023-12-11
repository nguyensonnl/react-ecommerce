import "./Catalog.scss";
import "./CatalogV4.scss";
import React, { useCallback, useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import brandService from "../../api/brandService";
import categoryService from "../../api/categoryService";
import { listPriceNew } from "../../constants/index";
import axiosClient from "../../api/axiosClient";

/**
 * Case1:
 * - Call api product
 * - Filter product in clientSide
 *
 * Case2:
 * - Update query
 * - Send query to serverSide
 */

const CatalogV5 = () => {
  const { cate } = useParams();
  const [brands, setBrands] = useState();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterProducts] = useState();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [queryParams, setQueyParams] = useState({
    sort: "",
  });

  useEffect(() => {
    fetchBrand();
  }, []);

  useEffect(() => {
    fetchCateAndProductByCate();
  }, [cate]);

  const fetchBrand = async () => {
    try {
      const res = await brandService.getAllBrand();
      setBrands(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCateAndProductByCate = async () => {
    try {
      const [resCategory, resProduct] = await Promise.all([
        categoryService.getCategoryById(cate),
        axiosClient.get(`/products?categories=${cate}`),
      ]);
      setCategory(resCategory.data);
      setProducts(resProduct.data.data.productList);
      setFilterProducts(resProduct.data.data.productList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSingleCheckbox = (e, value) => {
    if (e.target.checked) {
      setSelectedBrand({
        _id: value._id,
        name: value.name,
      });
    } else {
      setSelectedBrand(null);
    }
  };

  const handleSelectedPrice = (e, value) => {
    if (e.target.checked) {
      setSelectedPrice(value);
    } else {
      setSelectedPrice(null);
    }
  };

  const updatedProduct = useCallback(() => {
    let temp = [...products];

    if (selectedBrand) {
      temp = filterProductBrand(temp);
    }

    if (selectedPrice) {
      temp = filterProductPrice(temp);
    }

    handleSort(temp);

    setFilterProducts(temp);
  }, [selectedBrand, queryParams, selectedPrice]);

  useEffect(() => {
    updatedProduct();
  }, [updatedProduct]);

  const filterProductBrand = (temp) => {
    return temp.filter((item) => item?.brand?._id === selectedBrand._id);
  };

  const filterProductPrice = (temp) => {
    if (selectedPrice.value === "0-2000") {
      return temp.filter((item) => item.price < 2000000);
    } else if (selectedPrice.value === "2000-5000") {
      return temp.filter(
        (item) => item.price > 2000000 && item.price < 5000000
      );
    } else if (selectedPrice.value === "5000-10000") {
      return temp.filter(
        (item) => item.price > 5000000 && item.price < 10000000
      );
    } else if (selectedPrice.value === "10000-20000") {
      return temp.filter(
        (item) => item.price > 10000000 && item.price < 20000000
      );
    } else if (selectedPrice.value === "20000-50000") {
      return temp.filter(
        (item) => item.price > 20000000 && item.price < 50000000
      );
    } else {
      return temp.filter((item) => item.price > 50000000);
    }
  };

  const handleSort = (product) => {
    if (queryParams?.sort === "increase") {
      product = product.sort((a, b) => a.price - b.price);
    }

    if (queryParams?.sort === "decrease") {
      product = product.sort((a, b) => b.price - a.price);
    }

    if (queryParams?.sort === "createdAt") {
      product = product.sort((a, b) => a.createdAt - b.createdAt);
    }
  };

  const handleClearFilter = () => {
    setFilterProducts(products);
    setSelectedBrand(null);
    setSelectedPrice(null);
    setQueyParams({});
  };

  return (
    <Helmet title={category?.name}>
      <section className="grid">
        <Breadcrumb title={category?.name} />

        <div className="row">
          <div className="col col-2">
            <section className="left">
              <div className="catalog__product__filter">
                <div className="filter__group">
                  <span>Thương hiệu</span>
                  <div className="filter__list">
                    {brands &&
                      brands.length > 0 &&
                      brands.map((value, index) => (
                        <div className="filter__item" key={index}>
                          <input
                            checked={selectedBrand?._id === value._id}
                            type="checkbox"
                            onChange={(e) =>
                              handleChangeSingleCheckbox(e, value)
                            }
                          />
                          <div className="product__cate-title">
                            {value.name}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="filter__group">
                  <span>Khoảng giá</span>
                  <div className="filter__list">
                    {listPriceNew &&
                      listPriceNew.length > 0 &&
                      listPriceNew.map((item, index) => (
                        <div className="filter__item" key={index}>
                          <input
                            checked={selectedPrice?.id === item.id}
                            type="checkbox"
                            onChange={(e) => handleSelectedPrice(e, item)}
                          />
                          <div className="product__cate-title price">
                            {item.title}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="btn__clear-filter">
                  <button type="button" onClick={() => handleClearFilter()}>
                    Xóa bộ lọc
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="col col-10">
            <section className="right">
              <div className="product__category__title">
                <h2>{category?.name}</h2>
              </div>
              <div className="catalog__filter">
                <span>Sắp xếp:</span>
                <ul className="catalog__list">
                  <li className="catalog__item">
                    <span
                      className="catalog__link"
                      onClick={(e) => setQueyParams({ sort: "increase" })}
                    >
                      Giá tăng dần
                    </span>
                  </li>
                  <li className="catalog__item">
                    <span
                      className="catalog__link"
                      onClick={(e) => setQueyParams({ sort: "decrease" })}
                    >
                      Giá giảm dần
                    </span>
                  </li>
                  <li className="catalog__item">
                    <span
                      className="catalog__link"
                      onClick={(e) => setQueyParams({ sort: "createdAt" })}
                    >
                      Hàng mới
                    </span>
                  </li>
                </ul>
              </div>

              <div className="product__category">
                <div className="product__category__list">
                  {filterdProducts &&
                    filterdProducts.length > 0 &&
                    filterdProducts.map((item) => (
                      <ProductCard key={item._id} product={item} />
                    ))}

                  {filterdProducts && filterdProducts.length === 0 && (
                    <div
                      style={{
                        textAlign: "center",
                        width: "100%",
                        padding: "20px",
                      }}
                    >
                      Not data avaliable
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CatalogV5;
