const CategoryList = (props) => {
  const { categories, handleDelete, handleUpdate } = props;

  const handleDeleteItem = (id) => {
    if (window.confirm("Bạn thật sự muốn xóa sản phẩm này?")) {
      handleDelete(id);
    }
  };

  const handleUpdateItem = (id) => {
    handleUpdate(id);
  };

  return (
    <>
      <div className="card">
        <div className="card__header">Danh sách danh mục</div>
        <div className="card__body">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên danh mục</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories &&
                categories.length > 0 &&
                categories.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => handleUpdateItem(item._id)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn-delete"
                        type="submit"
                        onClick={() => handleDeleteItem(item._id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="card__footer"></div>
      </div>

      {/* <div className="item__content">
        <div className="item__title">Danh sách danh mục</div>
        <div className="item__body">
          <div className="item__control">
            <div className="item__show-record-page">
              <select>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
              <span> records per page</span>
            </div>
            <div className="item__search">
              <span>Search: </span>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm..."
                className="item__search-input"
              />
            </div>
          </div>
          <table className="item__list">
            <thead>
              <th>#</th>
              <th>Tên danh mục</th>
              <th>Action</th>
            </thead>
            <tbody>
              {allCategory.length > 0 &&
                allCategory.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button className="btn-edit">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button className="btn-delete">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="item__footer">
            <div className="item__show-record">
              Hiển thị từ 1 đến 2 của 2 bản ghi
            </div>
            <div className="item__pagination">
              <Pagination
              //   totalPosts={listProduct.length}
              //   postsPerPage={pageSize}
              //   setCurrentPage={setCurrentPage}
              //   previousPage={previousPage}
              //   nextPage={nextPage}
              //   activeId={activeId}
              //   setActiveId={setActiveId}
              //   curentPage={curentPage}
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CategoryList;
