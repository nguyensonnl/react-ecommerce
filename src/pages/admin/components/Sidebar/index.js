import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="admin__sidebar">
      <ul className="admin__sidebar__list">
        <li className="sidebar__list-item">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "sidebar__list-link active" : "sidebar__list-link"
            }
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/category"
            className={({ isActive }) =>
              isActive ? "sidebar__list-link active" : "sidebar__list-link"
            }
            end
          >
            Danh mục
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/brand"
            className={({ isActive }) =>
              isActive ? "sidebar__list-link active" : "sidebar__list-link"
            }
            end
          >
            Thương hiệu
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/product"
            className={({ isActive }) =>
              isActive ? "sidebar__list-link active" : "sidebar__list-link"
            }
          >
            Sản phẩm
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/order"
            className={({ isActive }) =>
              isActive ? "sidebar__list-link active" : "sidebar__list-link"
            }
          >
            Đơn hàng
          </NavLink>
        </li>
        {/* <li className="sidebar__list-item">
          <NavLink
            to="/admin/user"
            className={({ isActive }) =>
              isActive ? "sidebar__list-link active" : "sidebar__list-link"
            }
          >
            Người dùng
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
