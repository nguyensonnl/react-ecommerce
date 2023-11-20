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
  const [listProductHot, setListProductHot] = useState();
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProduct, resCategory, resProductHot] = await Promise.all([
          productService.getAllProduct(),
          categoryService.getAllCategory(),
          productService.getProductFeatured(5),
        ]);

        setProducts(resProduct.data.data.productList);
        setCategories(resCategory.data);
        setListProductHot(resProductHot.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //get product by category
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
        {listProductHot && listProductHot.length > 0 && (
          <div className="product__category">
            <div className="product__category__heading">
              <span>Sản phẩm nổi bật </span>
              <span>Xem tất cả</span>
            </div>
            <div className="product__category__list">
              {listProductHot?.map((item) => (
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
            <div className="product__category" key={item._id}>
              <div className="product__category__heading">
                <span>{item.name}</span>
                <span>
                  <Link to={`/c/${item._id}`}>Xem tất cả</Link>
                </span>
              </div>

              <div className="product__category__list">
                {item?.listProduct?.map((item) => (
                  <Suspense fallback={<div>...Loading</div>} key={item._id}>
                    <ProductCard product={item} />
                  </Suspense>
                ))}
              </div>
            </div>
          ))}
      </section>
    </Helmet>
  );
};

export default Home;
