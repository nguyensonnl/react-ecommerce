import { Link } from "react-router-dom";
import Section, { SectionBody } from "../../../../components/Section";
import "./Register.scss";
import auth from "../../../../assets/img/auth.png";

const Register = () => {
  return (
    <Section>
      <SectionBody>
        <div className="login">
          <img src={auth} className="login__avatar" />
          <div className="login__title">Đăng ký tài khoản</div>
          <form className="login__form">
            <input
              type="text"
              className="login__form__group"
              placeholder="Name"
            />
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
            <input
              type="password"
              className="login__form__group"
              placeholder="Confirm Password"
            />
            <button type="button" className="login__form-submit">
              Đăng ký
            </button>
          </form>
          <div className="login__footer">
            <span>Bạn đã có tài khoản?</span>
            <Link to="/login" className="login__footer-link">
              Đăng nhập
            </Link>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default Register;
