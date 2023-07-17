import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productApi from "../../../../api/productApi";
import { getAllBrand } from "../../../../redux/brandSlice";
import { getAllCateogry } from "../../../../redux/categorySlice";
import Layout from "../Layout";
import uploadSerivce from "../../../../api/uploadService";

let initialState = {
  name: "",
  countInStock: 0,
  price: 0,
  brand: "",
  category: "",
  description: "",
  richDescription: "",
  image: "",
  images: [],
  isFeatured: false,
};
const ProductAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialState);
  const [previewUrls, setPreviewUrls] = useState([]);

  const allCategory = useSelector((state) => state.category.categories);
  const allBrand = useSelector((state) => state.brand.brands);

  useEffect(() => {
    dispatch(getAllBrand());
    dispatch(getAllCateogry());
  }, []);

  //const [file, setFile] = useState();
  // const handleChangeFile = (e) => {
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };

  //const [files, setFiles] = useState([]);

  // const handleChangeFileList = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   setFiles(selectedFiles);
  //   const urls = selectedFiles.map((file) => URL.createObjectURL(file));
  //   setPreviewUrls(urls);
  // };

  const renderImagePreviews = () => {
    return previewUrls.map((url) => (
      <img
        key={url}
        src={url}
        alt="Uploaded file preview"
        className="file-image"
      />
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: inputs.name,
      price: inputs.price,
      countInStock: inputs.countInStock,
      brand: inputs.brand,
      category: inputs.category,
      description: inputs.description,
      richDescription: inputs.richDescription,
      isFeatured: inputs.isFeatured,
    };

    if (inputs.image) {
      const data = new FormData();
      const fileName = `${inputs.image.name}`;
      data.append("image", inputs.image);
      newProduct.image = fileName;
      try {
        //await uploadSerivce.singleFile(data);
        const res = await axios.post(
          "http://localhost:5050/api/v1/upload",
          data
        );
        if (res.status === 200) {
          console.log("Successfull");
        } else {
          console.log("Failed");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (inputs.images) {
      const images = inputs.images;
      const data = new FormData();
      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
        newProduct.images = images.map((item) => item.name); //database
      }
      try {
        // const res = await uploadSerivce.multipleFile(data);
        const res = await axios.post(
          "http://localhost:5050/api/v1/upload/collection",
          data
        );
        if (res.status === 200) {
          console.log("Successfull");
        } else {
          console.log("Failed");
        }
      } catch (error) {
        console.log(error);
      }
    }

    try {
      let res = await axios.post(
        `http://localhost:5050/api/v1/products`,
        newProduct
      );

      navigate("/admin/product");

      if (res.status === 200) {
        console.log("Create product successfully");
      } else {
        console.log("Some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    let { name, value, checked } = e.target;

    if (e.target.checked && e.target.type === "checkbox") {
      setInputs({ ...inputs, [name]: checked });
    } else if (e.target.type === "file" && e.target.name === "image") {
      const file = e.target.files[0];
      setInputs({ ...inputs, [name]: file });
    } else if (e.target.type === "file" && e.target.name === "images") {
      const selectedFiles = Array.from(e.target.files);
      setInputs({ ...inputs, [name]: selectedFiles });
      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleCancel = () => {
    setInputs(initialState);
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="product-add"
        encType="multipart/form-data"
      >
        <div className="card">
          <div className="card__header">Thông tin sản phẩm</div>
          <div className="card__body">
            <div className="row">
              <div className="col col-6">
                <div className="item__group">
                  <label className="item__label">Tên sản phẩm:</label>
                  <input
                    value={inputs.name}
                    type="text"
                    name="name"
                    placeholder="Tên sản phẩm..."
                    className="item__control"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  <div className="item__error"></div>
                </div>

                <div className="item__group">
                  <label className="item__label">Danh mục sản phẩm:</label>
                  <select
                    className="item__control"
                    name="category"
                    // value={inputs.category}
                    onChange={(e) => handleChangeInput(e)}
                  >
                    {allCategory &&
                      allCategory.length > 0 &&
                      allCategory.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                  <div className="item__error"></div>
                </div>

                <div className="item__group">
                  <label className="item__label">Thương hiệu</label>
                  <select
                    className="item__control"
                    name="brand"
                    //</div>value={inputs.brand}
                    onChange={(e) => handleChangeInput(e)}
                  >
                    {allBrand &&
                      allBrand.length > 0 &&
                      allBrand.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                  <div className="item__error"></div>
                </div>
              </div>
              <div className="col col-6">
                <div className="item__group">
                  <label className="item__label">Giá:</label>
                  <input
                    value={inputs.price}
                    name="price"
                    type="number"
                    className="item__control"
                    placeholder="Giá sản phẩm..."
                    onChange={(e) => handleChangeInput(e)}
                  ></input>
                  <div className="item__error"></div>
                </div>
                <div className="item__group">
                  <label className="item__label">Số lượng:</label>
                  <input
                    value={inputs.countInStock}
                    name="countInStock"
                    type="number"
                    className="item__control"
                    placeholder="Số lượng"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  <div className="item__error"></div>
                </div>
                <div className="item__group-other">
                  <label className="item__label-other">Nổi bật:</label>
                  <input
                    onChange={(e) => handleChangeInput(e)}
                    //checked={inputs.isFeatured}
                    value={inputs.isFeatured}
                    type="checkbox"
                    className="item__checkbox"
                    name="isFeatured"
                  />
                  <div className="item__error"></div>
                </div>
              </div>
              <div className="col col-12">
                <div className="item__group">
                  <label className="item__label">Mô tả sản phẩm:</label>
                  <textarea
                    onChange={(e) => handleChangeInput(e)}
                    name="description"
                    value={inputs.description}
                    className="item__control"
                  ></textarea>
                </div>
                <div className="item__error"></div>
              </div>
              <div className="col col-12">
                <div className="item__group">
                  <label className="item__label">Chi tiết sản phẩm:</label>
                  <textarea
                    onChange={(e) => handleChangeInput(e)}
                    value={inputs.richDescription}
                    name="richDescription"
                    className="item__control"
                  ></textarea>
                </div>
                <div className="item__error"></div>
              </div>

              <div className="col col-12">
                <div className="form__control">
                  <label>Ảnh đại diện:</label>
                  <input
                    name="image"
                    type="file"
                    onChange={(e) => handleChangeInput(e)}
                  />
                  {inputs.image && (
                    <img
                      src={URL.createObjectURL(inputs.image)}
                      alt="avatar"
                      className="file-image"
                    />
                  )}
                </div>
              </div>
              <div className="col col-12">
                <div className="form__control">
                  <label>Ảnh phụ:</label>
                  <input
                    name="images"
                    type="file"
                    multiple
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                {renderImagePreviews()}
              </div>
            </div>
          </div>
          <div className="card__footer">
            <button className="btn btn-submit" style={{ marginRight: "5px" }}>
              Xác nhận
            </button>
            <button className="btn btn-reset" onClick={() => handleCancel()}>
              Hủy
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductAdd;
