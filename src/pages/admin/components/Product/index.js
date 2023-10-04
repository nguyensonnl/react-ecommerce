import Layout from "../Layout";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import productService from "../../../../api/productService";
import ProductList from "./ProductList";
import brandService from "../../../../api/brandService";
import categoryService from "../../../../api/categoryService";

/**
 * Call api data
 */

const Product = () => {
  //Khi create, update, delete thì update luôn list product
  const navigate = useNavigate();
  const [allProduct, setAllProduct] = useState();
  const [listBrand, setListBrand] = useState();
  const [listCategory, setListCategory] = useState();

  const [listProduct, setListProduct] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState({
    brand: "",
    category: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resPro, resBrand, resCate] = await Promise.all([
          productService.getAllProduct(),
          brandService.getAllBrand(),
          categoryService.getAllCategory(),
        ]);
        setAllProduct(resPro.data.data.productList);
        setListBrand(resBrand.data);
        setListCategory(resCate.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //Flow Pagination
  const [curentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const firstPageIndex = (curentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;
  const currentProducts = listProduct.slice(firstPageIndex, lastPageIndex);
  const [activeId, setActiveId] = useState(1);

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
  //End flow Pagination

  //const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return item.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const handleAdd = () => {
    navigate("/admin/product/add");
  };

  const handleEditForm = (slug) => {
    navigate(`/admin/product/${slug}`);
  };

  const handleDeleteItem = async (id) => {
    try {
      if (window.confirm("Bạn thật sự muốn xóa sản phẩm này?")) {
        await productService.deleteProduct(id);
        const updatedProducts = listProduct.filter(
          (product) => product._id !== id
        );
        setListProduct(updatedProducts);
        setIsDeleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

        <div className="product__search" style={{ marginBottom: "10px" }}>
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

          {/* <span>Search: </span>
          <input
            value={searchInput}
            type="text"
            placeholder="Nhập tên sản phẩm..."
            className="product__search-input"
            onChange={(e) => handleSearchInput(e)}
          /> */}
        </div>
        <ProductList
          products={currentProducts}
          totalPosts={listProduct.length}
          postsPerPage={pageSize}
          pageSize={pageSize}
          setCurrentPage={setCurrentPage}
          previousPage={previousPage}
          nextPage={nextPage}
          activeId={activeId}
          setActiveId={setActiveId}
          curentPage={curentPage}
          firstPageIndex={firstPageIndex}
          lastPageIndex={lastPageIndex}
          listProduct={listProduct}
          onEditForm={handleEditForm}
          onDeleteItem={handleDeleteItem}
        />

        <br />
        {/* <div className="product__content">
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
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Thương hiệu</th>
                  <th>Action</th>
                </tr>
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
                          onClick={() => handleEditForm(product.slug)}
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
        </div> */}
      </div>
    </Layout>
  );
};

export default Product;
