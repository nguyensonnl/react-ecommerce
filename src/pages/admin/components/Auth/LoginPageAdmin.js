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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
    navigate("/admin");

    // try {
    //   const res = await axios.post(
    //     "http://localhost:5001/api/v1/auth/login",
    //     inputs
    //   );
    //   return res.data;
    // } catch (error) {
    //   console.log(error);
    // }
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
            abc.xyz
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
              />
            </div>
            <div className="form-group1">
              <input
                type="password"
                placeholder="Mật khẩu đăng nhập cửa hàng"
                className="form-control1 admin-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="forgot-password">
              <Link to="" className="forgot-password__link">
                Quên mật khẩu
              </Link>
            </div>
            <button className="admin__btn">Đăng nhập</button>

            {errorMessage && <p>{errorMessage}</p>}
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
