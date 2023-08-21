import AccountSidebar from "../pages/client/AccountSidebar";

const ProfileLayout = (props) => {
  return (
    <div className="grid">
      <div className="account mtb-20">
        <div className="row">
          <div className="col-3">
            <AccountSidebar />
          </div>
          <div className="col-9">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
