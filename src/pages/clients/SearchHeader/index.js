import "./SearchHeader.scss";
import React, { useCallback } from "react";
import Helmet from "../../../components/Helmet";
import Breadcrumb from "../../../components/Breadcrumb";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "../../../redux/reducers/productSlice";
import { useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useMemo } from "react";

const SearchHeader = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.products);
  const [resultSearch, setResultSearch] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  const filterData = listProduct.filter((product) => {
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
                  <ProductCard
                    id={item._id}
                    key={index}
                    name={item.name}
                    src={item.image}
                    price={item.price}
                    className="overide-width"
                  />
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
