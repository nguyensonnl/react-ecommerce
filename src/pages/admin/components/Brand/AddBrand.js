import React from "react";

const AddBrand = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Thương hiệu
        </label>
        <input type="email" className="form-control" />
      </div>

      <button
        style={{ fontSize: "16px" }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBrand;
