import { Link, useNavigate } from "react-router-dom";
import "./LoginPageAdmin.scss";
import f from "../../../../assets/img/facebook.png";
import g from "../../../../assets/img/google.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLogin } from "../../../../redux/authSlice";
import axios from "axios";
import axiosClient from "../../../../api/axiosClient";

const LoginPageAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 5) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const res = await dispatch(userLogin({ email, password }));
      if (res.success) {
        navigate("/admin");
      } else {
        setFormErrors({ email: "Email hoặc mật khẩu không đúng" });
      }
    }
  };

  return (
    <div className="admin-login">
      <div className="admin__layout">
        <div className="admin__brand">
          <span className="b">Lam Sơn Watch</span>
        </div>
        <div className="admin__title">Đăng nhập vào cửa hàng của bạn</div>
        <div className="admin__link-store">
          <span>Truy cập vào cửa hàng </span>
          <Link to="/" className="admin__link">
            https://lamsonwatch.vercel.app
          </Link>
        </div>
        <div className="admin__form">
          <form onSubmit={handleSubmitLogin}>
            <div className="form-group1">
              <input
                type="email"
                placeholder="Email/Số điện thoại của bạn"
                className="form-control1 admin-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
              {formErrors.email && (
                <span className="handle-error">{formErrors.email}</span>
              )}
            </div>
            <div className="form-group1">
              <input
                type="password"
                placeholder="Mật khẩu đăng nhập cửa hàng"
                className="form-control1 admin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />
              {formErrors.password && (
                <span className="handle-error">{formErrors.password}</span>
              )}
            </div>
            <div className="forgot-password">
              <Link to="" className="forgot-password__link">
                Quên mật khẩu
              </Link>
            </div>
            <button className="admin__btn">Đăng nhập</button>
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
