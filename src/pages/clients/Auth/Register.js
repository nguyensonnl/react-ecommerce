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
import { register } from "../../../redux/customerSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    navigate("/account/login");
  };
  return (
    <Helmet title="Đăng ký tài khoản">
      <Breadcrumb className="grid" title="Đăng ký tài khoản" />
      <Section>
        <SectionBody>
          <div className="auth-login">
            <div className="login-title">
              <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
              <div className="sub-title">
                <span>Bạn đã có toàn khoản ? </span>
                <Link to="/account/login" className="login-link">
                  Đăng nhập tại đây
                </Link>
              </div>
              <h3 className="auth-info">THÔNG TIN CÁ NHÂN</h3>
            </div>

            <div className="login-form">
              <form onSubmit={handleSubmitForm}>
                <div className="form-group1">
                  <label>
                    Họ<span> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Họ"
                    className="form-control1"
                    value={formData.lastName}
                    name="lastName"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Tên<span> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tên"
                    className="form-control1"
                    value={formData.firstName}
                    name="firstName"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Số điện thoại<span> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="form-control1"
                    value={formData.phone}
                    name="phone"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
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
                <button type="submit" className="login-btn">
                  Đăng ký
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

export default Register;
