import React, { useEffect } from "react";
import { useState } from "react";

const BrandAdd = (props) => {
  const { handleSubmit, brands, idBrand } = props;
  const [brand, setBrand] = useState("");

  const handleSumitInput = (e) => {
    handleSubmit(e, brand);
    setBrand("");
  };

  useEffect(() => {
    if (idBrand) {
      const resutl = brands.filter((item) => item._id === idBrand);
      setBrand(resutl[0].name);
    }
  }, [idBrand]);

  return (
    <div className="category__add" style={{ marginBottom: "10px" }}>
      <form onSubmit={(e) => handleSumitInput(e)}>
        <div className="card">
          <div className="card__header">Thông tin thương hiệu</div>
          <div className="card__body">
            <div className="item__group">
              <label className="item__label">Tên thương hiệu</label>
              <input
                value={brand}
                required
                type="text"
                className="item__control"
                placeholder="Tên thương hiệu..."
                onChange={(e) => setBrand(e.target.value)}
              />
              <div className="item__error"></div>
            </div>
          </div>
          <div className="card__footer">
            <button className="btn btn-submit">
              {idBrand ? "Edit" : "Submit"}
            </button>
            {/* <button className="btn btn-reset">Cancel</button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BrandAdd;
