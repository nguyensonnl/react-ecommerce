import React from "react";

const CreateCategory = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="category__adđ">
      <form onSubmit={handleSubmit} className="product-add">
        <div className="wrapper">
          <div className="form__title">Thông tin danh mục</div>
          <div className="form__body">
            <div className="form__control">
              <label>Tên danh mục:</label>
              <input
                value=""
                type="text"
                placeholder="Tên danh mục..."
                className="form__input-text form__group"
              />
            </div>
          </div>
          <div className="form__footer">
            <button className="btn-edit">Submit</button>
            <button className="btn-cancel">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
