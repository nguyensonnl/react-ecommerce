import "./Product.scss";
import React, { useEffect, useState, Suspense } from "react";
import Helmet from "../../../components/Helmet";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import productApi from "../../../api/productApi";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ProductCard from "../../../components/ProductCard";
import Comment from "../../../components/SocialPlugin/Comment";
import { numberFormat } from "../../../utils/numberFormat";

//splitting
const ProductView = React.lazy(() => import("../../../components/ProductView"));

const Product = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.getProductBySlug(slug);
      setProduct(res.data);
      const products = await productApi.getProductByCate(res.data.category, 5);
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

            <Suspense fallback={<div>...Loading</div>}>
              <ProductView product={product} />
            </Suspense>

            <section style={{ margin: "20px 0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 style={{ margin: "20px 0" }}>Sản phẩm tương tự</h2>
                <Link to={`/danh-muc/${product?.category}`}>Xem thêm</Link>
              </div>

              <div
                className="product_cate"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {products &&
                  products.length > 0 &&
                  products.map((item, index) => (
                    <ProductCard
                      id={item._id}
                      key={index}
                      src={item.image}
                      brand={item.brand}
                      name={item.name}
                      price={numberFormat(item.price)}
                      slug={item.slug}
                    />
                  ))}
              </div>
            </section>

            <section>
              <Comment
                dataHref={
                  +process.env.REACT_APP_IS_LOCAL === 1
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
