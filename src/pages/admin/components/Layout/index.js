import "./Layout.scss";
import Sidebar from "../../components/Sidebar/";
import Header from "../../components/Header/";

const Layout = (props) => {
  return (
    <div className="admin">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Header />
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
