import { Link, useNavigate } from "react-router-dom";
import Section, { SectionBody } from "../../../components/Section";
import "./Auth.scss";
import auth from "../../../assets/img/auth.png";
import Breadcrumb from "../../../components/Breadcrumb";
import f from "../../../assets/img/facebook.png";
import g from "../../../assets/img/google.png";
import Helmet from "../../../components/Helmet";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../../redux/customerSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    //  navigate("/account");
    navigate("/");
  };
  return (
    <Helmet title="Đăng nhập tài khoản">
      <Breadcrumb className="grid" title="Đăng nhập tài khoản" />
      <Section>
        <SectionBody>
          <div className="auth-login">
            <div className="login-title">
              <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
              <div className="sub-title">
                <span>Bạn chưa có toàn khoản ? </span>
                <Link to="/account/register" className="login-link">
                  Đăng ký tại đây
                </Link>
              </div>
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmitForm}>
                <div className="form-group1">
                  <label>
                    Email<span> *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control1"
                    value={formData.email}
                    name="email"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Mật khẩu<span> *</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="form-control1"
                    value={formData.password}
                    name="password"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div className="forgot-password">
                  Quên mật khẩu? Nhấn vào
                  <Link to="" className="forgot-password-link">
                    đây
                  </Link>
                </div>

                <button type="submit" className="login-btn">
                  Đăng nhập
                </button>
              </form>
            </div>

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
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Login;
