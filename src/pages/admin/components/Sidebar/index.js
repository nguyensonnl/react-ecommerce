import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">React admin</div>
      <hr />
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "active" : "sidebar__list-link"
            }
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/product"
            className={({ isActive }) =>
              isActive ? "active" : "sidebar__list-link"
            }
          >
            Products
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/order"
            className={({ isActive }) =>
              isActive ? "active" : "sidebar__list-link"
            }
          >
            Orders
          </NavLink>
        </li>
        <li className="sidebar__list-item">
          <NavLink
            to="/admin/user"
            className={({ isActive }) =>
              isActive ? "active" : "sidebar__list-link"
            }
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
