const BrandList = (props) => {
  const { brands, handleDelete, handleUpdate } = props;

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
        <div className="card__header">Danh sách thương hiệu</div>
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
              {brands &&
                brands.length > 0 &&
                brands.map((item, index) => (
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
    </>
  );
};

export default BrandList;
