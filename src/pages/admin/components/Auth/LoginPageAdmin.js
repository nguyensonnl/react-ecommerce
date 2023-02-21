import { Link, useNavigate } from "react-router-dom";
import "./LoginPageAdmin.scss";
import f from "../../../../assets/img/facebook.png";
import g from "../../../../assets/img/google.png";

const LoginPageAdmin = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/admin");
  };
  return (
    <div className="admin-login">
      <div className="admin__layout">
        <div className="admin__brand">
          <span className="a">L</span>
          <span className="b">am</span>
          <span className="a">S</span>
          <span className="b">ơn</span>
        </div>
        <div className="admin__title">Đăng nhập vào cửa hàng của bạn</div>
        <div className="admin__link-store">
          <span>Truy cập vào cửa hàng </span>
          <Link to="/" className="admin__link">
            abc.xyz
          </Link>
        </div>
        <div className="admin__form">
          <form>
            <div className="form-group1">
              <input
                type="email"
                placeholder="Email/Số điện thoại của bạn"
                className="form-control1 admin-input"
              />
            </div>
            <div className="form-group1">
              <input
                type="password"
                placeholder="Mật khẩu đăng nhập cửa hàng"
                className="form-control1 admin-input"
              />
            </div>
            <div className="forgot-password">
              <Link to="" className="forgot-password__link">
                Quên mật khẩu
              </Link>
            </div>
            <button className="admin__btn" onClick={() => handleLogin()}>
              Đăng nhập
            </button>
          </form>

          <div className="other-login">
            <p>Hoặc đăng nhập bằng</p>
            <div className="social-media">
              <Link to="" className="social-media--facebook">
                <img src={f} className="social-media-img" />
              </Link>
              <Link to="" className="social-media--google">
                <img src={g} className="social-media-img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageAdmin;
