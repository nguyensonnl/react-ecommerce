import React from "react";
import Helmet from "../../../components/Helmet";
import Grid from "../../../components/Grid";
import Breadcrumb from "../../../components/Breadcrumb";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import "./SearchHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "../../../redux/reducers/productSlice";

const SearchHeader = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.products);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

  const filterData = listProduct.filter((product) => {
    if (search === "") {
      return product;
    } else {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <Helmet title="Tìm kiếm">
      <Grid>
        <Breadcrumb title="Tìm kiếm" />

        {filterData.length > 0 ? (
          <div className="search__title">
            Có {filterData.length} kết quả tìm kiếm
          </div>
        ) : (
          <div className="result__search">
            KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN.
          </div>
        )}

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
      </Grid>
    </Helmet>
  );
};

export default SearchHeader;
