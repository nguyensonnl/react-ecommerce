import Layout from "../Layout";
import "./Product.scss";
import p1 from "../../../../assets/img/products/f1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import { useMemo } from "react";
import productApi from "../../../../api/productApi";

let PageSize = 10;

const Product = () => {
  const [item, setItem] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = curentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = item.slice(firstPostIndex, lastPostIndex);

  const [activeId, setActiveId] = useState(1);

  const previousPage = () => {
    if (curentPage !== 1) {
      setCurrentPage(curentPage - 1);
      setActiveId(curentPage - 1);
    }
  };

  const nextPage = () => {
    if (curentPage !== Math.ceil(item.length / postsPerPage)) {
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

  // useEffect(async () => {
  //   const res = await productApi.getAllProduct();
  //   setItem(res.data);
  // }, []);

  const handleAdd = () => {
    navigate("/admin/product/add");
  };

  const handleEditForm = (id) => {
    navigate(`/admin/product/${id}`);
  };

  const handleDeleteItem = async (id) => {
    try {
      await productApi.deleteProduct(id);
      const updatedProducts = item.filter((product) => product.id !== id);
      setItem(updatedProducts);
      setIsDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    try {
      const res = await productApi.getAllProduct();
      setItem(res.data);
      setIsDeleted(false);
    } catch (error) {
      console.log(error);
    }
  }, [isDeleted]);

  return (
    <Layout>
      <div className="product__title">Products</div>
      <div className="product">
        <div className="product__control">
          <div className="product__search">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="product__search-input"
            />
            <select className="product__search-select">
              <option>Danh mục</option>
              <option>Đồng hồ thông minh</option>
              <option>Đồng hồ điện tử</option>
            </select>
          </div>
          <button className="product__btn" onClick={() => handleAdd()}>
            Thêm
          </button>
        </div>

        <table className="product__list">
          <thead>
            <th>STT</th>
            {/* <th>Ảnh sản phẩm</th> */}
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Action</th>
          </thead>
          <tbody>
            {currentPosts &&
              currentPosts.length > 0 &&
              currentPosts.map((product, index) => (
                <tr key={product._id}>
                  <td>{index}</td>
                  {/* <td>
                    <img src={p1} />
                  </td> */}
                  <td>{product.name}</td>
                  <td>Đồng hồ thông minh</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditForm(product._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteItem(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={item.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        /> */}
        <Pagination
          totalPosts={item.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          previousPage={previousPage}
          nextPage={nextPage}
          activeId={activeId}
          setActiveId={setActiveId}
          curentPage={curentPage}
        />
      </div>
    </Layout>
  );
};

export default Product;
