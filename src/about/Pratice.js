import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBrand } from "../src/redux/brandSlice";
import { getAllProduct } from "../src/redux/reducers/productSlice";
import ProductCard from "../components/ProductCard";
import { getAllCateogry } from "../src/redux/categorySlice";
import { useCallback } from "react";

const Pratice = () => {
  const dispatch = useDispatch();
  const listBrand = useSelector((state) => state.brand.brands);
  const listProduct = useSelector((state) => state.product.products);
  const listCategory = useSelector((state) => state.category.categories);

  const [listfilter, setListFilter] = useState([]);
  const [products, setProducts] = useState(listProduct);

  useEffect(() => {
    dispatch(getAllBrand());
    dispatch(getAllProduct());
    dispatch(getAllCateogry());
  }, []);

  useEffect(() => {
    setProducts(listProduct);
  }, [listProduct]);

  const handleChangeCheck = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      setListFilter([...listfilter, item.name]);
    } else {
      setListFilter(listfilter.filter((i) => i !== item.name));
    }
  };

  const updateProduct = useCallback(() => {
    let temp = [...listProduct];
    if (listfilter.length > 0) {
      temp = temp.filter((i) => listfilter.includes(i.brand.name));
    }
    setProducts(temp);
  }, [listfilter, listProduct]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  //Search only one
  const productFilterCheck = listProduct.filter((product) => {
    if (listfilter.length > 0) {
      return listfilter.includes(product.brand.name);
    } else {
      return listProduct;
    }
  });

  const handleClickButton = (i) => {
    let temp = [...listProduct];
    temp = temp.filter((e) => e.category.name === i.name);
    setProducts(temp);
  };

  return (
    <div className="pratice section-m1">
      <div className="row">
        <div className="col-3">
          <div className="filter__checkbox">
            {listBrand.map((item, index) => (
              <label key={item._id}>
                <input
                  type="checkbox"
                  onChange={(e) => handleChangeCheck(e, item)}
                  checked={listfilter.includes(item.name)}
                />
                <span>{item.name}</span>
              </label>
            ))}
          </div>
          <div className="filter__button">
            {listCategory.map((i) => (
              <button onClick={() => handleClickButton(i)}>{i.name}</button>
            ))}
          </div>
        </div>
        <div className="col-9">
          <div className="list__product">
            {products.map((item, index) => (
              <div className="list__product-card" key={index}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  src={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pratice;
