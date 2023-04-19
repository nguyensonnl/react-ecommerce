import React, { useEffect, useState } from "react";
import "./Home.scss";
import HeroSlider from "../../../components/HeroSlider";
import Feature from "../../../components/Feature";
import ProductCard from "../../../components/ProductCard";
import Banner from "../../../components/Banner";
import Helmet from "../../../components/Helmet";
import productApi from "../../../api/productApi";
import { getAllProduct } from "../../../redux/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import men from "../../../assets/img/banner/dong-ho-nam.jpg";
import women from "../../../assets/img/banner/dong-ho-nu.jpg";
import double from "../../../assets/img/banner/dong-ho-doi.jpg";

const Home = () => {
  const [productsFeatured, setProductsFeatured] = useState([]);
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.product.products);
  const [menWatch, setMenWatch] = useState([]);
  const [womenWatch, setWomenWatch] = useState([]);
  const [doubleWatch, setDoubleWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await productApi.getProductFeatured(5);
      setProductsFeatured(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const men = await productApi.getProductByCate("63fc7648857357d5e8bca46c");
      setMenWatch(men.data);
      const women = await productApi.getProductByCate(
        "63fc764d857357d5e8bca46e"
      );
      setWomenWatch(women.data);
      const doubleWatch = await productApi.getProductByCate(
        "63fc7642857357d5e8bca46a"
      );
      setDoubleWatch(doubleWatch.data);
      setIsLoading(true);
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Helmet title="Đồng Hồ Lam Sơn">
      <HeroSlider />

      <div className="grid">
        <Feature />

        <div className="product__category mtb-20">
          <h2 className="product__category__title mtb-20">ĐỒNG HỒ NỔI BẬT</h2>
          <div className="product__category__list">
            <Carousel responsive={responsive}>
              {productsFeatured.map((item, index) => (
                <ProductCard
                  id={item._id}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* {listCategory &&
        listCategory.length > 0 &&
        listCategory.map((item) => (
          <>
            <Banner />
            <div className="product__category grid mt-20">
              <h2 className="product__category__title">{item.name}</h2>
              <div className="product__category__list">
                <Carousel responsive={responsive}>
                  {allProduct.map((item, index) => (
                    <ProductCard
                      id={item._id}
                      key={index}
                      src={item.image}
                      brand={item.brand}
                      name={item.name}
                      price={item.price.toLocaleString()}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </>
        ))} */}

      <section className="mtb-20">
        <Banner src={men} />
        <div className="product__category grid mt-20">
          <h2 className="product__category__title mtb-20">ĐỒNG HỒ NAM</h2>
          {/* <div className="product__category__list">
            <Carousel responsive={responsive}>
              {menWatch.map((item, index) => (
                <ProductCard
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </Carousel>
          </div> */}

          {isLoading && (
            <div className="product__cate-list">
              {menWatch.map((item, index) => (
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
          )}

          {!isLoading && (
            <div className="product__cate-list">
              {menWatch.map((item, index) => (
                <ProductCard.LoadingProduct
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="mtb-20">
        <Banner src={women} />
        <div className="product__category grid mt-20">
          <h2 className="product__category__title mtb-20">ĐỒNG HỒ NỮ</h2>
          {/* <div className="product__category__list">
            <Carousel responsive={responsive}>
              {womenWatch.map((item, index) => (
                <ProductCard
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </Carousel>
          </div> */}
          {isLoading && (
            <div className="product__cate-list">
              {womenWatch.map((item, index) => (
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
          )}

          {!isLoading && (
            <div className="product__cate-list">
              {womenWatch.map((item, index) => (
                <ProductCard.LoadingProduct
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mtb-20">
        <Banner src={double} />
        <div className="product__category grid mt-20">
          <h2 className="product__category__title mtb-20">ĐỒNG HỒ ĐÔI</h2>
          {/* <div className="product__category__list">
            <Carousel responsive={responsive}>
              {doubleWatch.map((item, index) => (
                <ProductCard
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </Carousel>
          </div> */}
          {isLoading && (
            <div className="product__cate-list">
              {doubleWatch.map((item, index) => (
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
          )}

          {!isLoading && (
            <div className="product__cate-list">
              {doubleWatch.map((item, index) => (
                <ProductCard.LoadingProduct
                  id={item._id}
                  key={index}
                  src={item.image}
                  brand={item.brand}
                  name={item.name}
                  price={item.price.toLocaleString()}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
