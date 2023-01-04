import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const AdminPage = () => {
  return (
    <Layout>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Hello admin</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link className="btn btn-primary" to="/admin/user/create">
                  Create
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <h1>Hello admin</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
