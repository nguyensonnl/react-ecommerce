import "./SearchHeader.scss";
import React, { useEffect, useState } from "react";
import Helmet from "../../components/Helmet";
import Breadcrumb from "../../components/Breadcrumb";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import productService from "../../api/productService";
//import LoadingSpinner from "../../components/LoadingSpinner";
//import { useMemo } from "react";

const SearchHeader = () => {
  const [resultSearch, setResultSearch] = useState([]);
  const [products, setProducts] = useState();
  const [filteredData, setFilteedData] = useState();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProduct = await productService.getAllProduct();
        setProducts(resProduct.data.data.productList);
        setFilteedData(resProduct.data.data.productList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filterData = filteredData.filter((product) => {
    if (search === "") {
      return product;
    } else {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  // const searchData = useCallback(() => {
  //   let temp = listProduct;

  //   temp = temp.filter((product) => {
  //     if (search === "") {
  //       return product;
  //     } else {
  //       return product.name.toLowerCase().includes(search.toLowerCase());
  //     }
  //   });

  //   setResultSearch(temp);
  // }, [search]);

  // useEffect(() => {
  //   searchData();
  // }, [searchData]);

  return (
    <Helmet title="Tìm kiếm">
      <div className="grid">
        <Breadcrumb title="Tìm kiếm" />

        {filterData && filterData.length > 0 ? (
          <>
            <div className="search__title">
              Có {filterData.length} kết quả tìm kiếm
            </div>

            <div className="list__product-search section-m1">
              {filterData.map((item, index) => (
                <div className="product-search-item">
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
