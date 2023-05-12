import Layout from "../../components/Layout";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card text-bg-light mb-3">
                <div className="card-header">Sản phẩm</div>
                <div className="card-body">
                  <p className="card-text">Tổng sản phẩm: 10</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card text-bg-light mb-3">
                <div className="card-header">Đơn hàng</div>
                <div className="card-body">
                  <p className="card-text">Tổng đơn hàng: 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
