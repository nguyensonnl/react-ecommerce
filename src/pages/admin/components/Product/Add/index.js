import { useState } from "react";
import Layout from "../../Layout";
import "./Add.scss";

let initialState = {
  name: "",
  price: "",
  countInStock: 0,
  price: 0,
  brand: "",
  category: "",
  description: "",
  richDescription: "",
  isFeatured: false,
};
const Add = () => {
  const [inputs, setInputs] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleChangeInput = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let checked = target.checked;

    if (e.target.checked && e.target.type === "checkbox") {
      setInputs({ ...inputs, [name]: checked });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit} className="product-add">
        <div className="wrapper">
          <div className="form__title">Thông tin sản phẩm</div>
          <div className="form__body">
            <div className="form__control">
              <label>Tên sản phẩm:</label>
              <input
                value={inputs.name}
                type="text"
                name="name"
                placeholder="Tên sản phẩm..."
                className="form__input-text form__group"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div className="form__control">
              <label>Giá:</label>
              <input
                value={inputs.price}
                name="price"
                type="number"
                className="form__group"
                placeholder="Giá sản phẩm..."
                onChange={(e) => handleChangeInput(e)}
              ></input>
            </div>
            <div className="form__control">
              <label>Số lượng:</label>
              <input
                value={inputs.countInStock}
                name="countInStock"
                type="number"
                className="form__group"
                placeholder="Số lượng"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div className="form__control">
              <label>Danh mục sản phẩm:</label>
              <select
                className="form__group"
                name="category"
                value={inputs.category}
                onChange={(e) => handleChangeInput(e)}
              >
                <option>Đồng hồ thông minh</option>
                <option>Đồng hồ điện tử</option>
              </select>
            </div>

            <div className="form__control">
              <label>Thương hiệu</label>
              <select
                className="form__group"
                name="brand"
                value={inputs.brand}
                onChange={(e) => handleChangeInput(e)}
              >
                <option>Apple</option>
                <option>Xiaomi</option>
              </select>
            </div>
            <div className="form__control">
              <label>Nổi bật:</label>
              <input
                onChange={(e) => handleChangeInput(e)}
                //checked={inputs.isFeatured}
                value={inputs.isFeatured}
                type="checkbox"
                className="form__checkbox"
                name="isFeatured"
              />
            </div>

            <div className="form__control">
              <label>Mô tả sản phẩm:</label>
              <textarea
                onChange={(e) => handleChangeInput(e)}
                name="description"
                value={inputs.description}
              ></textarea>
            </div>
            <div className="form__control">
              <label>Chi tiết sản phẩm:</label>
              <textarea
                onChange={(e) => handleChangeInput(e)}
                value={inputs.richDescription}
                name="richDescription"
              ></textarea>
            </div>
            {/* <div className="form_control">
              <label style={{ marginRight: "120px" }}>Hình ảnh:</label>
              <input type="file" />
            </div> */}
          </div>
          <div className="form__footer">
            <button className="btn-edit">Submit</button>
            <button className="btn-cancel">Cancel</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Add;
