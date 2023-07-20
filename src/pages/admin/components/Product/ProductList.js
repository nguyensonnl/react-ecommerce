import React from "react";
import Pagination from "../../../../components/Pagination";

const ProductList = (props) => {
  const {
    products,
    totalPosts,
    setCurrentPage,
    previousPage,
    nextPage,
    activeId,
    setActiveId,
    curentPage,
    firstPageIndex,
    lastPageIndex,
    listProduct,
    pageSize,
    onEditForm,
    onDeleteItem,
  } = props;
  return (
    <div className="card">
      <div className="card__header">Danh sách sản phẩm</div>
      <div className="card__body">
        <div className="flow-search-table">
          <div className="records-per-page">
            <label>Show </label>
            <select>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
            <span> entries</span>
          </div>
          <div className="search-input">
            <label>Search:</label>
            <input
              //value={searchInput}
              type="text"
              placeholder="Tên sản phẩm..."
              //onChange={(e) => handleSearchInput(e)}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Thương hiệu</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.category?.name}</td>
                  <td>{product.brand?.name}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => onEditForm(product.slug)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn-delete"
                      // onClick={() => handleDeleteItem(product._id)}
                      onClick={() => onDeleteItem(product._id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="card__footer">
        <div className="flow-showing-paginate">
          <div className="show-entries">
            {firstPageIndex + 1 === listProduct.length ? (
              <>
                Showing {firstPageIndex + 1} of {listProduct.length} entries
              </>
            ) : (
              <>
                Showing {firstPageIndex + 1} to {lastPageIndex} of{" "}
                {listProduct.length} entries
              </>
            )}
          </div>
          <div className="paginate">
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
  );
};

export default ProductList;
