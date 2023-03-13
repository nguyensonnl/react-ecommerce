import Grid from "../../../components/Grid";
import Helmet from "../../../components/Helmet";
import "./Account.scss";

const Account = () => {
  return (
    <Helmet title="Thông tin tài khoản">
      <Grid>
        <div>This is Account information</div>
      </Grid>
    </Helmet>
  );
};

export default Account;
