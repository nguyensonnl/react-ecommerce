import "../../styles/index.scss";
import Sidebar from "../../components/Sidebar/";
import Header from "../../components/Header/";

const Layout = (props) => {
  //margin-left: 15% bị trừ đi của sidebar
  return (
    <div className="admin__page">
      <Header />
      <div className="container" style={{ display: "flex", marginTop: "60px" }}>
        <Sidebar />
        <div
          className="content"
          style={{ width: "85%", marginLeft: "15%", padding: "20px" }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
