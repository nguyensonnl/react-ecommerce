import "./Home.scss";
import React, { useEffect, useState, useRef, Suspense } from "react";
import HeroSlider from "../../../components/HeroSlider";
//import ProductCard from "../../../components/ProductCard";
import Helmet from "../../../components/Helmet";
import productApi from "../../../api/productApi";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = React.lazy(() => import("../../../components/ProductCard"));

const Home = () => {
  const [featuredList, setFeaturedList] = useState([]);
  // const [menWatch, setMenWatch] = useState([]);
  // const [womenWatch, setWomenWatch] = useState([]);
  // const [doubleWatch, setDoubleWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await productApi.getProductFeatured(5);
      setFeaturedList(res.data);
    };
    fetchData();
  }, []);

  //the way new
  const cache = useRef({});

  useEffect(() => {
    const fetchProducts = async () => {
      const productURL = `${process.env.REACT_APP_BASE_URL}/api/v1/products`;
      const categoryURL = `${process.env.REACT_APP_BASE_URL}/api/v1/categories`;

      // Check if data already exists in the cache
      if (cache.current[productURL] && cache.current[categoryURL]) {
        const productsByCate = cache.current[categoryURL].reduce(
          (acc, category) => {
            return [
              ...acc,
              {
                ...category,
                productData: cache.current[productURL].filter(
                  (product) => product.category._id === category._id
                ),
              },
            ];
          },
          []
        );
        setCategories(productsByCate);
        setIsLoading(true);
        return;
      }

      // Data not found in cache, make network requests
      const [resProduct, resCategory] = await Promise.all([
        axios.get(productURL),
        axios.get(categoryURL),
      ]);
      const products = resProduct.data;
      const categories = resCategory.data;

      // Store data in cache
      cache.current[productURL] = products;
      cache.current[categoryURL] = categories;

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
      setIsLoading(true);
    };

    fetchProducts();
  }, []);

  //the way old
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const url = `${process.env.REACT_APP_BASE_URL}/api/v1/products`;

  //     const resProduct = await productApi.getAllProduct();
  //     const products = resProduct.data;
  //     const resCategory = await productApi.getCategory();
  //     const categories = resCategory.data;

  //     const productsByCate = categories.reduce((acc, category) => {
  //       return [
  //         ...acc,
  //         {
  //           ...category,
  //           productData: products.filter(
  //             (product) => product.category._id === category._id
  //           ),
  //         },
  //       ];
  //     }, []);
  //     setCategories(productsByCate);
  //     setIsLoading(!isLoading);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <Helmet title="Đồng Hồ Lam Sơn">
      <HeroSlider />

      <section className="grid">
        {featuredList.length > 0 && (
          <div className="product__category mtb-20">
            <h2 className="product__category__title">
              <span>Đồng hồ nổi bật </span>
            </h2>
            <div className="product__cate-list">
              {featuredList.map((item, index) => (
                <Suspense fallback={<div>...Loading</div>} key={item._id}>
                  <ProductCard
                    id={item._id}
                    key={index}
                    src={item.image}
                    brand={item.brand}
                    name={item.name}
                    price={item.price.toLocaleString()}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        )}

        {categories &&
          categories.length > 0 &&
          categories.map((item) => (
            <section className="mtb-20" key={item._id}>
              <div className="product__category">
                <h2 className="product__category__title">
                  <span>{item.name}</span>
                </h2>

                <div className="product__cate-list">
                  {item.productData.map((item, index) => (
                    <Suspense fallback={<div>...Loading</div>} key={item._id}>
                      <ProductCard
                        id={item._id}
                        key={index}
                        src={item.image}
                        brand={item.brand}
                        name={item.name}
                        price={item.price.toLocaleString()}
                      />
                    </Suspense>
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
      </section>
    </Helmet>
  );
};

export default Home;
