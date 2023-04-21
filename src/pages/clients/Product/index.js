import React, { useEffect, useState } from "react";
import Helmet from "../../../components/Helmet";
import ProductView from "../../../components/ProductView";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
import productApi from "../../../api/productApi";

const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await productApi.getProductById(id);
      setProduct(res.data);
      setIsLoading(true);
    };
    fetchProducts();
  }, [id]);

  return (
    <Helmet title={product.name}>
      <div className="grid">
        <Breadcrumb
          title2={product.category && product.category.name}
          title={product.name}
        />
        <ProductView product={product} isLoading={isLoading} />
      </div>
    </Helmet>
  );
};

export default Product;
