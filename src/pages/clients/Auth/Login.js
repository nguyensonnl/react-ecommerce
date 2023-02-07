import { Link } from "react-router-dom";
import Section, { SectionBody } from "../../../components/Section";
import "./Auth.scss";
import auth from "../../../assets/img/auth.png";
import Breadcrumb from "../../../components/Breadcrumb";
import f from "../../../assets/img/facebook.png";
import g from "../../../assets/img/google.png";
import Helmet from "../../../components/Helmet";

const Login = () => {
  return (
    <Helmet title="Đăng nhập tài khoản">
      <Breadcrumb className="grid" title="Đăng nhập tài khoản" />
      <Section>
        <SectionBody>
          {/* <div className="login">
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
       </div> */}

          <div className="auth-login">
            <div className="login-title">
              <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
              <div className="sub-title">
                <span>Bạn chưa có toàn khoản ? </span>
                <Link to="/register" className="login-link">
                  Đăng ký tại đây
                </Link>
              </div>
            </div>
            <div className="login-form">
              <form>
                <div className="form-group1">
                  <label>
                    Email<span> *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control1"
                  />
                </div>
                <div className="form-group1">
                  <label>
                    Mật khẩu<span> *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Mật khẩu"
                    className="form-control1"
                  />
                </div>
                <div className="forgot-password">
                  Quên mật khẩu? Nhấn vào
                  <Link to="" className="forgot-password-link">
                    đây
                  </Link>
                </div>

                <button className="login-btn">Đăng nhập</button>
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
