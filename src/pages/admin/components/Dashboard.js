import Layout from "./Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="admin__dashboard">
        <div className="">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card__header">Sản phẩm</div>
                <div className="card__body">Tổng sản phẩm: 10</div>
              </div>
            </div>
            <div className="col-6">
              <div className="card text-bg-light mb-3">
                <div className="card">
                  <div className="card__header">Đơn hàng</div>
                  <div className="card__body">Tổng đơn hàng: 10</div>
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
