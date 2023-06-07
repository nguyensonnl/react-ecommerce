import React, { useEffect, useState, Suspense } from "react";
import Helmet from "../../../components/Helmet";
//import ProductView from "../../../components/ProductView";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import productApi from "../../../api/productApi";
import LoadingSpinner from "../../../components/LoadingSpinner";

const ProductView = React.lazy(() => import("../../../components/ProductView"));

const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.getProductById(id);
      setProduct(res.data);
      setIsLoading(true);
    };
    fetchProduct();
  }, [id]);

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
          </>
        )}
      </div>
    </Helmet>
  );
};

export default Product;
