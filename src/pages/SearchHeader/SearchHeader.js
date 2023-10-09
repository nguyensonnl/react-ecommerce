import "./SearchHeader.scss";
import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import Breadcrumb from "../../components/Breadcrumb";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import productService from "../../api/productService";
import axiosClient from "../../api/axiosClient";

/**
 * Server lọc data, trả data đã lọc về phía client
 * Server trả toàn bộ data, client sẽ tự lọc data
 * Tạo ra 1 biến để lưu lại data đã lọc
 *
 */

const SearchHeader = () => {
  const [products, setProducts] = useState();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProduct = await axiosClient.get(`/products?name=${search}`);
        setProducts(resProduct.data.data.productList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Helmet title="Tìm kiếm">
      <div className="grid">
        <Breadcrumb title="Tìm kiếm" />

        {products && products.length > 0 ? (
          <>
            <div className="search__title">
              Có {products.length} kết quả tìm kiếm
            </div>

            <div className="list__product-search section-m1">
              {products.map((item, index) => (
                <div className="product-search-item" key={item._id}>
                  <ProductCard product={item} className="overide-width" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result__search">
            KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN.
          </div>
        )}
      </div>
    </Helmet>
  );
};

export default SearchHeader;
