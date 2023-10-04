import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout";
import brandService from "../../../../api/brandService";
import categoryService from "../../../../api/categoryService";

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
const ProductUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialState);
  const [product, setProduct] = useState({});
  const [listBrand, setListBrand] = useState();
  const [listCate, setListCate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resBrand, resCate] = await Promise.all([
          brandService.getAllBrand(),
          categoryService.getAllCategory(),
        ]);
        setListBrand(resBrand.data);
        setListCate(resCate.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (id && product)
      setInputs({
        name: product.name || "",
        countInStock: product.countInStock || "",
        price: product.price || "",
        brand: product.brand || "",
        category: product.category || "",
        description: product.description || "",
        richDescription: product.richDescription || "",
        image: product.image || "",
        images: product.images || "",
        isFeatured: product.isFeatured || "",
      });
  }, [id, product]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5050/api/v1/products/${id}`
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [previewUrls, setPreviewUrls] = useState([]);

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
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("price", inputs.price);
    formData.append("countInStock", inputs.countInStock);
    formData.append("brand", inputs.brand);
    formData.append("category", inputs.category);
    formData.append("description", inputs.description);
    formData.append("richDescription", inputs.richDescription);
    formData.append("isFeatured", inputs.isFeatured);

    if (inputs.image) {
      formData.append("image", inputs.image);
    }

    if (inputs.images && inputs.images.length > 0) {
      for (let i = 0; i < inputs.images.length; i++) {
        formData.append("images", inputs.images[i]);
      }
    }

    try {
      let res = await axios.put(
        `http://localhost:5001/api/v1/products/${id}`,
        formData
      );

      navigate("/admin/product");
      setInputs(initialState);

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
    let { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setInputs({ ...inputs, [name]: checked });
    } else if (type === "file" && name === "image") {
      setInputs({ ...inputs, [name]: URL.createObjectURL(e.target.files[0]) });
    } else if (type === "file" && name === "images") {
      const selectedFiles = Array.from(e.target.files);
      setInputs({ ...inputs, [name]: selectedFiles });
      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleClickBack = () => {
    navigate("/admin/product");
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
                {listCate &&
                  listCate.length > 0 &&
                  listCate.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
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
                {listBrand &&
                  listBrand.length > 0 &&
                  listBrand.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form__control">
              <label>Nổi bật:</label>
              <input
                onChange={(e) => handleChangeInput(e)}
                checked={inputs.isFeatured}
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
            <div className="form__control">
              <label>Ảnh đại diện:</label>
              <input
                name="image"
                type="file"
                onChange={(e) => handleChangeInput(e)}
              />
              {inputs.image && (
                <img
                  src={`${process.env.REACT_APP_BASE_IMG}${inputs.image}`}
                  className="file-image"
                />
              )}
            </div>
            <div className="form__control">
              <label>Ảnh phụ:</label>
              <input
                name="images"
                type="file"
                multiple
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            {inputs.images &&
              inputs.images.length > 0 &&
              inputs.images.map((url, index) => (
                <img
                  key={index}
                  src={`${process.env.REACT_APP_BASE_IMG}${url}`}
                  className="file-image"
                />
              ))}
            {/* {renderImagePreviews()} */}

            {/* <div className="form_control">
              <label style={{ marginRight: "120px" }}>Hình ảnh:</label>
              <input type="file" />
            </div> */}
          </div>
          <div className="form__footer">
            <button className="btn-edit">Cập nhật</button>
            <div className="btn-cancel" onClick={() => handleCancel()}>
              Hủy bỏ
            </div>
            <div className="btn-back" onClick={() => handleClickBack()}>
              &larr; Về trang trước
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductUpdate;
