import "./Catalog.scss";
import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

export const listPriceNew = [
  { id: 1, title: "Dưới 2 triệu", value: "0-2000" },
  { id: 2, title: "Từ 2 - 5 triệu", value: "2000-5000" },
  { id: 3, title: "Từ 5 - 10 triệu", value: "5000-10000" },
  { id: 4, title: "Từ 10 - 20 triệu", value: "10000-20000" },
  { id: 5, title: "Từ 20 - 50 triệu", value: "20000-50000" },
  { id: 6, title: "Trên 50 triệu", value: "50000+" },
];

const CatalogV3 = () => {
  const { cate } = useParams(); //id category
  const [brands, setBrands] = useState();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let query = `http://localhost:8181/products?categories=${cate}`;
        const [resBrand, resCategory, resProductCate] = await Promise.all([
          axios.get("http://localhost:8181/api/v1/brands"),
          axios.get(`http://localhost:8181/api/v1/categories/${cate}`),
          axios.get(query),
        ]);
        if (selectedBrand) {
          query += `&brand=${selectedBrand}`;
        }
        setLoading(false);
        setBrands(resBrand.data);
        setCategory(resCategory.data);
        setProducts(resProductCate.data.data.productList);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [cate]);

  const handleFilterBrand = (item) => {
    setSelectedBrand(item._id);
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
                    <span className="product__cate-title price">
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
                <span className="catalog__link">Giá tăng dần</span>
              </li>
              <li className="catalog__item">
                <span className="catalog__link">Giá giảm dần</span>
              </li>
              <li className="catalog__item">
                <span className="catalog__link">Hàng mới</span>
              </li>
            </ul>
          </div>

          <div className="catalog__list-body">
            <button
              style={{ margin: "10px 0" }}
              type="button"
              className="catalog__list-body-btn"
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
            {products &&
              products.length > 0 &&
              products.map((item) => (
                <ProductCard
                  key={item._id}
                  product={item}
                  className="card-overide"
                />
              ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default CatalogV3;
