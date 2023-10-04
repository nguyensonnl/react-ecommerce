import React, { useState, useEffect, useCallback } from "react";
import Layout from "../Layout";
import CategoryAdd from "./CategoryAdd";
import CategoryList from "./CategoryList";
import categoryService from "../../../../api/categoryService";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [idCate, setIdCate] = useState();
  const [allCategory, setAllCategory] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await categoryService.getAllCategory();
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  const updatedCate = useCallback(() => {
    let temp = allCategory;

    setCategories(temp);
  }, [allCategory]);

  useEffect(() => {
    updatedCate();
  }, [updatedCate]);

  const handleSubmit = async (e, category) => {
    e.preventDefault();
    const newCategory = {
      name: category,
    };

    if (idCate) {
      await categoryService.updatedCategory(idCate, newCategory);
      const updatedCategories = categories.map((cat) =>
        cat._id === idCate ? { ...cat, name: category } : cat
      );
      setCategories(updatedCategories);
      setIdCate("");
    } else {
      try {
        const res = await categoryService.createdCategory(newCategory);
        const reuslt = res.data.category;
        let temp = [...categories, reuslt];
        setCategories(temp);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await categoryService.deletedCategory(id);
      const updatedCate = categories.filter((item) => item._id !== id);
      setCategories(updatedCate);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    setIdCate(id);
  };

  return (
    <Layout>
      <div className="admin__category">
        <div className="item__header">
          <h3>DANH MỤC SẢN PHẨM</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <CategoryAdd
              handleSubmit={handleSubmit}
              categories={categories}
              idCate={idCate}
            />
          </div>
          <div className="col-8">
            <CategoryList
              categories={categories}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
