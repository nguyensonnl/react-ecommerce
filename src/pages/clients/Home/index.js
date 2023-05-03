import "./Home.scss";
import React, { useEffect, useState } from "react";
import HeroSlider from "../../../components/HeroSlider";
import Feature from "../../../components/Feature";
import ProductCard from "../../../components/ProductCard";
import Banner from "../../../components/Banner";
import Helmet from "../../../components/Helmet";
import productApi from "../../../api/productApi";
import men from "../../../assets/img/banner/dong-ho-nam.jpg";
import women from "../../../assets/img/banner/dong-ho-nu.jpg";
import double from "../../../assets/img/banner/dong-ho-doi.jpg";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const Home = () => {
  const [featuredList, setFeaturedList] = useState([]);
  // const [menWatch, setMenWatch] = useState([]);
  // const [womenWatch, setWomenWatch] = useState([]);
  // const [doubleWatch, setDoubleWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await productApi.getProductFeatured(5);
      setFeaturedList(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const resProduct = await productApi.getAllProduct();
      const products = resProduct.data;
      const resCategory = await productApi.getCategory();
      const categories = resCategory.data;

      const productsByCate = categories.reduce((acc, category) => {
        return [
          ...acc,
          {
            ...category,
            productData: products.filter(
              (product) => product.category._id === category._id
            ),
          },
        ];
      }, []);
      setCategories(productsByCate);
      setIsLoading(!isLoading);
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const men = await productApi.getProductByCate("63fc7648857357d5e8bca46c");
  //     setMenWatch(men.data);
  //     const women = await productApi.getProductByCate(
  //       "63fc764d857357d5e8bca46e"
  //     );
  //     setWomenWatch(women.data);
  //     const doubleWatch = await productApi.getProductByCate(
  //       "63fc7642857357d5e8bca46a"
  //     );
  //     setDoubleWatch(doubleWatch.data);
  //     setIsLoading(true);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Helmet title="Đồng Hồ Lam Sơn">
      {!isLoading && <LoadingSpinner />}

      {isLoading && (
        <>
          <HeroSlider />
          <Feature />
          <div className="product__category mtb-20">
            <h2 className="product__category__title mtb-20">ĐỒNG HỒ NỔI BẬT</h2>
            <div className="product__category__list"></div>
          </div>

          {categories &&
            categories.length > 0 &&
            categories.map((item) => (
              <section className="mtb-20" key={item._id}>
                <Banner src={men} />
                <div className="product__category grid mt-20">
                  <h2
                    className="product__category__title mtb-20"
                    style={{ textTransform: "upperCase" }}
                  >
                    {item.name}
                  </h2>

                  <div className="product__cate-list">
                    {item.productData.map((item, index) => (
                      <ProductCard
                        id={item._id}
                        key={index}
                        src={item.image}
                        brand={item.brand}
                        name={item.name}
                        price={item.price.toLocaleString()}
                      />
                    ))}
                  </div>
                </div>
                <div className="product__show-all">
                  <Link
                    to={`/danh-muc/${item._id}`}
                    className="product__show-link"
                  >
                    Xem tất cả
                  </Link>
                </div>
              </section>
            ))}
        </>
      )}
    </Helmet>
  );
};

export default Home;
