import React, { useEffect, useState, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import Helmet from "../../components/Helmet";
import Breadcrumb from "../../components/Breadcrumb";

import productService from "../../api/productService";
import LoadingSpinner from "../../components/LoadingSpinner";
import Comment from "../../components/Comment";
import ProductView from "../../components/ProductView";
import "./Product.scss";

const ProductCard = React.lazy(() => import("../../components/ProductCard"));

const Product = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productService.getProductBySlug(slug);
      setProduct(res.data);
      const products = await productService.getProductByCate(
        res.data.category,
        5
      );
      setProducts(products.data.data.productList);
      setIsLoading(true);
    };
    fetchProduct();
  }, [slug]);

  return (
    <Helmet title={product.name}>
      <div className="grid">
        {!isLoading && <LoadingSpinner />}

        {isLoading && (
          <>
            <Breadcrumb
              title2={product.category && product.category.name}
              title={product.name}
            />

            <ProductView product={product} />

            <section style={{ margin: "20px 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{ margin: "20px 0" }}>Có thể bạn sẽ thích</h2>
                <Link to={`/danh-muc/${product?.category}`}>Xem thêm</Link>
              </div>

              <div
                className="product_cate"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {products &&
                  products.length > 0 &&
                  products.map((item) => (
                    <Suspense fallback={<div>...Loading</div>} key={item._id}>
                      <ProductCard product={item} />
                    </Suspense>
                  ))}
              </div>
            </section>

            <section>
              <Comment
                dataHref={
                  +process.env.REACT_APP_IS_LOCAL === 0
                    ? "https://developers.facebook.com/docs/plugins/comments#configurator"
                    : window.location.href
                }
                width={"100%"}
                slug={product.slug}
              />
            </section>
          </>
        )}
      </div>
    </Helmet>
  );
};

export default Product;
