import React, { useEffect } from "react";
import { useState } from "react";

const CategoryAdd = (props) => {
  const { handleSubmit, categories, idCate } = props;
  const [category, setCategory] = useState("");

  const handleSumitInput = (e) => {
    handleSubmit(e, category);
    setCategory("");
  };

  useEffect(() => {
    if (idCate) {
      const resutl = categories.filter((item) => item._id === idCate);
      setCategory(resutl[0].name);
    }
  }, [idCate]);

  return (
    <div className="category__add" style={{ marginBottom: "10px" }}>
      <form onSubmit={(e) => handleSumitInput(e)}>
        <div className="card">
          <div className="card__header">Thông tin danh mục</div>
          <div className="card__body">
            <div className="item__group">
              <label className="item__label">Tên danh mục</label>
              <input
                value={category}
                required
                type="text"
                className="item__control"
                placeholder="Tên danh mục..."
                onChange={(e) => setCategory(e.target.value)}
              />
              <div className="item__error"></div>
            </div>
          </div>
          <div className="card__footer">
            <button className="btn btn-submit">
              {idCate ? "Edit" : "Submit"}
            </button>
            <button className="btn btn-reset">Cancel</button>
          </div>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit} className="product-add">
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
      </form> */}
    </div>
  );
};

export default CategoryAdd;
