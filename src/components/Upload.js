import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [preImages, setPreImages] = useState([]);

  const handleChangeInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleChangeImages = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imgs = Array.from(e.target.files);
      setImages(imgs);
      const preImgs = imgs.map((file) => URL.createObjectURL(file));
      setPreImages(preImgs);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // if (!image) {
    //   return;
    // }

    // if (image) {
    //   const data = new FormData();
    //   // const fileName = Date.now() + image.name;
    //   //data.append("name", fileName);
    //   data.append("image", image);

    //   try {
    //     let res = await axios.post("http://localhost:5050/api/v1/upload", data);

    //     if (res.status === 200) {
    //       console.log("Successfull");
    //     } else {
    //       console.log("Error");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    if (images) {
      const data = new FormData();
      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }

      try {
        let res = await axios.post(
          "http://localhost:5050/api/v1/upload/collection",
          data
        );
        if (res.status === 200) {
          console.log("Successful");
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderImagePreviews = () => {
    return preImages.map((url) => (
      <img
        key={url}
        src={url}
        alt="Uploaded file preview"
        style={{ width: "50px", height: "50px" }}
      />
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        {/* <input
          type="file"
          name="image"
          onChange={(e) => handleChangeInput(e)}
        /> */}
        <input
          type="file"
          name="images"
          multiple
          onChange={(e) => handleChangeImages(e)}
        />
        <button>Submit</button>
      </form>

      <div className="preview-img">
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="image"
            style={{ width: "50px" }}
          />
        )}

        {renderImagePreviews()}
      </div>
    </div>
  );
};

export default Upload;
