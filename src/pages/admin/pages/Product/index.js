import Layout from "../../components/Layout";
import "./Product.scss";
import p1 from "../../../../assets/img/products/f1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import { useMemo } from "react";

let PageSize = 10;

const Product = () => {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = curentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = item.slice(firstPostIndex, lastPostIndex);

  const previousPage = () => {
    if (curentPage !== 1) {
      setCurrentPage(curentPage - 1);
    }
  };

  const nextPage = () => {
    if (curentPage !== Math.ceil(item.length / postsPerPage)) {
      setCurrentPage(curentPage + 1);
    }
  };

  // const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return item.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5001/api/v1/products");
    setItem(res.data);
  }, []);

  const handleAdd = () => {
    navigate("/admin/product/add");
  };

  return (
    <Layout>
      {/* <form className="product__form">
            <div className="form__control">
              <label>Tên sản phẩm:</label>
              <input
                type="text"
                placeholder="Tên sản phẩm..."
                className="form-group"
              />
            </div>
            <div className="form__control">
              <label>Mô tả:</label>
              <input
                type="text"
                placeholder="Mô tả sản phẩm..."
                className="form-group"
              />
            </div>
          </form> */}
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
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
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
        />
      </div>
    </Layout>
  );
};

export default Product;
