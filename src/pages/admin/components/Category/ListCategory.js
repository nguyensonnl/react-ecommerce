import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCateogry } from "../../../../redux/categorySlice";

const ListCategory = () => {
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCateogry());
  }, []);

  return (
    <div className="list__category">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allCategory &&
            allCategory.length > 0 &&
            allCategory.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <Link className="list__category-link">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <Link to="" className="list__category-link">
                    <i className="fa-solid fa-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
