import Layout from "../Layout";
import "./Product.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import { useMemo } from "react";
import productApi from "../../../../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { getAllCateogry } from "../../../../redux/categorySlice";
import { getAllBrand } from "../../../../redux/brandSlice";
import { useCallback } from "react";
import { getAllProduct } from "../../../../redux/reducers/productSlice";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listCategory = useSelector((state) => state.category.categories);
  const listBrand = useSelector((state) => state.brand.brands);
  const allProduct = useSelector((state) => state.product.products);
  const [listProduct, setListProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    brand: "",
    category: "",
  });

  //Pagination
  const [curentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const firstPageIndex = (curentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;
  const currentProducts = listProduct.slice(firstPageIndex, lastPageIndex);
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    dispatch(getAllCateogry());
    dispatch(getAllBrand());
    dispatch(getAllProduct());
  }, []);

  // useEffect(() => {
  //   if (allProduct.length > 0 && !isLoaded) {
  //     setListProduct([...allProduct]);
  //     setIsLoaded(true);
  //   }
  // }, [allProduct]);

  const previousPage = () => {
    if (curentPage !== 1) {
      setCurrentPage(curentPage - 1);
      setActiveId(curentPage - 1);
    }
  };

  const nextPage = () => {
    if (curentPage !== Math.ceil(listProduct.length / pageSize)) {
      setCurrentPage(curentPage + 1);
      setActiveId(curentPage + 1);
    }
  };

  //const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return item.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const handleAdd = () => {
    navigate("/admin/product/add");
  };

  const handleEditForm = (id) => {
    navigate(`/admin/product/${id}`);
  };

  const handleDeleteItem = async (id) => {
    try {
      await productApi.deleteProduct(id);
      const updatedProducts = listProduct.filter(
        (product) => product.id !== id
      );
      setListProduct(updatedProducts);
      setIsDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    try {
      // const res = await productApi.getAllProduct();
      // setListProduct(res.data);
      setIsDeleted(false);
    } catch (error) {
      console.log(error);
    }
  }, [isDeleted]);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    let temp = allProduct;
    if (searchInput !== "") {
      temp = temp.filter((product) => {
        // return product.name.toLowerCase().includes(searchInput.toLowerCase());
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setListProduct(temp);
    }
  };

  const handleFilterSelect = (e) => {
    setSelectedItem((prevSelected) => ({
      ...prevSelected,
      [e.target.name]: e.target.value,
    }));
  };

  const getFilteredList = useCallback(() => {
    let temp = allProduct;
    if (selectedItem.category && selectedItem.category !== "All") {
      temp = temp.filter(
        (item) => item.category.name === selectedItem.category
      );
    }

    if (selectedItem.brand && selectedItem.brand !== "All") {
      temp = temp.filter((item) => item.brand.name === selectedItem.brand);
    }
    setListProduct(temp);
  }, [selectedItem, allProduct]);

  useEffect(() => {
    getFilteredList();
  }, [getFilteredList]);

  return (
    <Layout>
      <div className="admin__product">
        <div className="product__header">
          <h2>SẢN PHẨM</h2>
          <button className="product__btn-add" onClick={() => handleAdd()}>
            <span>+</span> Thêm sản phẩm
          </button>
        </div>

        <div className="product__content">
          <div className="product__title">Danh sách sản phẩm</div>
          <div className="product__body">
            <div className="product__control">
              <div className="product__show-record-page">
                <select>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </select>
                <span> records per page</span>
              </div>
              <div className="product__search">
                <span>Danh mục: </span>
                <select
                  name="category"
                  className="product__search-select"
                  onChange={(e) => {
                    handleFilterSelect(e);
                  }}
                >
                  <option value="All">Tất cả</option>
                  {listCategory &&
                    listCategory.length > 0 &&
                    listCategory.map((item) => (
                      <option key={item._id}>{item.name}</option>
                    ))}
                </select>
                <span>Thương hiệu: </span>
                <select
                  name="brand"
                  className="product__search-select"
                  onChange={(e) => handleFilterSelect(e)}
                >
                  <option value="All">Tất cả</option>
                  {listBrand &&
                    listBrand.length > 0 &&
                    listBrand.map((item) => (
                      <option key={item._id}>{item.name}</option>
                    ))}
                </select>

                <span>Search: </span>
                <input
                  value={searchInput}
                  type="text"
                  placeholder="Nhập tên sản phẩm..."
                  className="product__search-input"
                  onChange={(e) => handleSearchInput(e)}
                />
              </div>
            </div>

            <table className="product__list">
              <thead>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Thương hiệu</th>
                <th>Action</th>
              </thead>
              <tbody>
                {currentProducts &&
                  currentProducts.length > 0 &&
                  currentProducts.map((product, index) => (
                    <tr key={product._id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.category.name}</td>
                      <td>{product.brand.name}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => handleEditForm(product._id)}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => handleDeleteItem(product._id)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="product__footer">
              <div className="product__show-record">
                Hiển thị từ {firstPageIndex + 1} đến {lastPageIndex} của{" "}
                {listProduct.length} bản ghi
              </div>
              <div className="product__pagination">
                <Pagination
                  totalPosts={listProduct.length}
                  postsPerPage={pageSize}
                  setCurrentPage={setCurrentPage}
                  previousPage={previousPage}
                  nextPage={nextPage}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  curentPage={curentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
