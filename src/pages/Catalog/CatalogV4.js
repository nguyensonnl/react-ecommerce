import "./Catalog.scss";
import "./CatalogV4.scss";
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

  //doing
  const [selectedBrand, setSelectedBrand] = useState([]);
  const handleChangeSingleCheckbox = (e, value) => {
    if (e.target.checked) {
      setSelectedBrand([
        {
          _id: value._id,
          name: value.name,
        },
      ]);
    } else {
      setSelectedBrand(selectedBrand?.filter((item) => item._id !== value._id));
    }
  };
  //doing

  console.log(selectedBrand);

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
                            checked={selectedBrand.some(
                              (item) => item._id === value._id
                            )}
                            type="checkbox"
                            onChange={(e) =>
                              handleChangeSingleCheckbox(e, value)
                            }
                          />
                          <span
                            className="product__cate-title"
                            onClick={() => handleFilterBrand(value._id)}
                          >
                            {value.name}
                          </span>
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

              <div className="product__category">
                <div className="product__category__list">
                  {filterdProducts &&
                    filterdProducts.length > 0 &&
                    filterdProducts.map((item) => (
                      <ProductCard key={item._id} product={item} />
                    ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CatalogV4;
