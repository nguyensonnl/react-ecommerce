import React from "react";

const ProductList = (props) => {
  const { products } = props;
  return (
    <div className="card">
      <div className="card__header">Danh sách sản phẩm</div>
      <div className="card__body">
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
                      // onClick={() => handleEditForm(product.slug)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn-delete"
                      // onClick={() => handleDeleteItem(product._id)}
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
        {/* <div className="product__show-record">
          Hiển thị từ {firstPageIndex + 1} đến {lastPageIndex} của{" "}
          {listProduct.length} bản ghi
        </div> */}
        <div className="product__pagination">
          {/* <Pagination
            totalPosts={listProduct.length}
            postsPerPage={pageSize}
            setCurrentPage={setCurrentPage}
            previousPage={previousPage}
            nextPage={nextPage}
            activeId={activeId}
            setActiveId={setActiveId}
            curentPage={curentPage}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
