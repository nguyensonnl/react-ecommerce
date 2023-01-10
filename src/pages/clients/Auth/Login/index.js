import { Link } from "react-router-dom";
import Section, { SectionBody } from "../../../../components/Section";
import "./Login.scss";
import auth from "../../../../assets/img/auth.png";

const Login = () => {
  return (
    <Section>
      <SectionBody>
        <div className="login">
          <img src={auth} className="login__avatar" />
          <div className="login__title">Đăng nhập tài khoản của bạn</div>
          <form className="login__form">
            <input
              type="email"
              className="login__form__group"
              placeholder="Email"
            />
            <input
              type="password"
              className="login__form__group"
              placeholder="Password"
            />
            <div className="login__form__check">
              <div className="remember">
                <input type="checkbox" className="remember-input" />
                <span className="remember-title">Nhớ tài khoản</span>
              </div>
              <Link to="/register" className="forgot">
                Quên mật khẩu?
              </Link>
            </div>
            <button type="button" className="login__form-submit">
              Đăng nhập
            </button>
          </form>
          <div className="login__footer">
            <span>Bạn chưa có tài khoản?</span>
            <Link to="/register" className="login__footer-link">
              Đăng ký
            </Link>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default Login;
