import React from "react";
import Col from "../../../components/Col";
import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import Row from "../../../components/Row";

const Catalog = () => {
  return (
    <Helmet title="Sản phẩm">
      <Grid>
        <Row>
          <Col col={3}>
            <div>Lọc sản phẩm</div>
          </Col>
          <Col col={9}>
            <div>Danh sách sản phẩm</div>
          </Col>
        </Row>
      </Grid>
    </Helmet>
  );
};

export default Catalog;
