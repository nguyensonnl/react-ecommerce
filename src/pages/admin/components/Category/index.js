import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import CategoryAdd from "./CategoryAdd";
import CategoryList from "./CategoryList";
import { useSelector, useDispatch } from "react-redux";
import { getAllCateogry } from "../../../../redux/categorySlice";
import categoryService from "../../../../api/categoryService";
import { useCallback } from "react";

const Category = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.category.categories);
  const [categories, setCategories] = useState([]);
  const [idCate, setIdCate] = useState();

  useEffect(() => {
    dispatch(getAllCateogry());
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
      console.log("fsdaf");
      return;
    }

    try {
      await categoryService.createdCategory(newCategory);
      let temp = [...categories, newCategory];
      setCategories(temp);
    } catch (error) {
      console.log(error);
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
