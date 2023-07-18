import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import brandService from "../../../../api/brandService";
import BrandAdd from "./BrandAdd";
import BrandList from "./BrandList";

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [idBrand, setIdBrand] = useState("");

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const res = await brandService.getAllBrand();
        setBrands(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBrand();
  }, []);

  const handleSubmit = async (e, brand) => {
    e.preventDefault();

    if (idBrand) {
      await brandService.updatedBrand(idBrand, { name: brand });
      const updatedBrand = brands.map((item) =>
        item._id === idBrand ? { ...item, name: brand } : item
      );
      setBrands(updatedBrand);
      setIdBrand("");
    } else {
      try {
        const res = await brandService.createdBrand({ name: brand });
        let temp = [...brands, res.data];
        setBrands(temp);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await brandService.deletedBrand(id);
      const updatedCate = brands.filter((item) => item._id !== id);
      setBrands(updatedCate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    setIdBrand(id);
  };

  return (
    <Layout>
      <div className="admin__category">
        <div className="item__header">
          <h3>DANH MỤC SẢN PHẨM</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <BrandAdd
              handleSubmit={handleSubmit}
              brands={brands}
              idBrand={idBrand}
            />
          </div>
          <div className="col-8">
            <BrandList
              brands={brands}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Brand;
