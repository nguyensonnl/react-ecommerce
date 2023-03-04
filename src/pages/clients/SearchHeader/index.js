import React from "react";
import Helmet from "../../../components/Helmet";
import Grid from "../../../components/Grid";
import Breadcrumb from "../../../components/Breadcrumb";

const SearchHeader = () => {
  return (
    <Helmet title="Tìm kiếm">
      <Grid>
        <Breadcrumb title="Tìm kiếm" />
      </Grid>
    </Helmet>
  );
};

export default SearchHeader;
