import "./Home.scss";
import React, { useEffect, useState, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../../components/HeroSlider";
import Helmet from "../../components/Helmet";
import productService from "../../api/productService";
import categoryService from "../../api/categoryService";

const ProductCard = React.lazy(() => import("../../components/ProductCard"));

/**
 * Using Promise.all to multiple fetching data
 * Chỉ call api 1 lần khi di chuyển sang tab khác
 * Tối ưu việc call api
 *
 */

const Home = () => {
  const [listProductOutstanding, setListProductOutstanding] = useState();
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProduct, resCategory, resProductOutstanding] =
          await Promise.all([
            productService.getAllProduct(),
            categoryService.getAllCategory(),
            productService.getProductFeatured(5),
          ]);

        setProducts(resProduct.data.data.productList);
        setCategories(resCategory.data);
        setListProductOutstanding(resProductOutstanding.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const productByCate = useMemo(() => {
    const category = categories?.reduce((acc, cate) => {
      return [
        ...acc,
        {
          ...cate,
          listProduct: products?.filter(
            (item) => item.category._id === cate._id
          ),
        },
      ];
    }, []);
    return category;
  }, [categories, products]);

  return (
    <Helmet title="SWatch">
      <HeroSlider />

      <section className="grid">
        {listProductOutstanding?.length > 0 && (
          <div className="product__category mtb-20">
            <h2 className="product__category__title">
              <span>Đồng hồ nổi bật </span>
            </h2>
            <div className="product__cate-list">
              {listProductOutstanding?.map((item) => (
                <Suspense fallback={<div>...Loading</div>} key={item._id}>
                  <ProductCard product={item} />
                </Suspense>
              ))}
            </div>
          </div>
        )}

        {productByCate &&
          productByCate?.length > 0 &&
          productByCate?.map((item) => (
            <section className="mtb-20" key={item._id}>
              <div className="product__category">
                <h2 className="product__category__title">
                  <span>{item.name}</span>
                </h2>

                <div className="product__cate-list">
                  {item?.listProduct?.map((item) => (
                    <Suspense fallback={<div>...Loading</div>} key={item._id}>
                      <ProductCard product={item} />
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
