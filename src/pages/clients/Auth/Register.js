import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";
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

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      errors.password = "Mật khẩu không được để trống";
    } else if (formData.password.length < 5) {
      errors.password = "Mật khẩu phải ít nhất 5 ký tự";
    }

    if (!formData.firstName) {
      errors.firstName = "Họ không được để trống";
    }

    if (!formData.lastName) {
      errors.lastName = "Tên không được để trống";
    }

    if (!formData.phone) {
      errors.phone = "Số điện thoại không được để trống";
    }

    return errors;
  };

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(register(formData));
      navigate("/account/login");
    }
  };
  return (
    <Helmet title="Đăng ký tài khoản">
      <div className="grid">
        <Breadcrumb title="Đăng ký tài khoản" />
      </div>

      <div className="auth-login mtb-20">
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
                required
                type="text"
                placeholder="Họ"
                className="form-control1"
                value={formData.lastName}
                name="lastName"
                onChange={(e) => handleChangeInput(e)}
              />
              {formErrors.lastName && (
                <span className="handle-error">{formErrors.lastName}</span>
              )}
            </div>
            <div className="form-group1">
              <label>
                Tên<span> *</span>
              </label>
              <input
                required
                type="text"
                placeholder="Tên"
                className="form-control1"
                value={formData.firstName}
                name="firstName"
                onChange={(e) => handleChangeInput(e)}
              />
              {formErrors.firstName && (
                <span className="handle-error">{formErrors.firstName}</span>
              )}
            </div>
            <div className="form-group1">
              <label>
                Số điện thoại<span> *</span>
              </label>
              <input
                required
                type="text"
                placeholder="Số điện thoại"
                className="form-control1"
                value={formData.phone}
                name="phone"
                onChange={(e) => handleChangeInput(e)}
              />
              {formErrors.phone && (
                <span className="handle-error">{formErrors.phone}</span>
              )}
            </div>
            <div className="form-group1">
              <label>
                Email<span> *</span>
              </label>
              <input
                required
                type="email"
                placeholder="Email"
                className="form-control1"
                value={formData.email}
                name="email"
                onChange={(e) => handleChangeInput(e)}
              />
              {formErrors.email && (
                <span className="handle-error">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group1">
              <label>
                Mật khẩu<span> *</span>
              </label>
              <input
                required
                type="password"
                placeholder="Mật khẩu"
                className="form-control1"
                value={formData.password}
                name="password"
                onChange={(e) => handleChangeInput(e)}
              />
              {formErrors.password && (
                <span className="handle-error">{formErrors.password}</span>
              )}
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
    </Helmet>
  );
};

export default Register;
