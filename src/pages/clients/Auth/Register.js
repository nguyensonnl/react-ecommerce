import { Link } from "react-router-dom";
import Section, { SectionBody } from "../../../components/Section";
import "./Auth.scss";
import auth from "../../../assets/img/auth.png";
import Breadcrumb from "../../../components/Breadcrumb";
import f from "../../../assets/img/facebook.png";
import g from "../../../assets/img/google.png";
import Helmet from "../../../components/Helmet";

const Register = () => {
  return (
    // <Section>
    //   <SectionBody>
    //     <div className="login">
    //       <img src={auth} className="login__avatar" />
    //       <div className="login__title">Đăng ký tài khoản</div>
    //       <form className="login__form">
    //         <input
    //           type="text"
    //           className="login__form__group"
    //           placeholder="Name"
    //         />
    //         <input
    //           type="email"
    //           className="login__form__group"
    //           placeholder="Email"
    //         />
    //         <input
    //           type="password"
    //           className="login__form__group"
    //           placeholder="Password"
    //         />
    //         <input
    //           type="password"
    //           className="login__form__group"
    //           placeholder="Confirm Password"
    //         />
    //         <button type="button" className="login__form-submit">
    //           Đăng ký
    //         </button>
    //       </form>
    //       <div className="login__footer">
    //         <span>Bạn đã có tài khoản?</span>
    //         <Link to="/login" className="login__footer-link">
    //           Đăng nhập
    //         </Link>
    //       </div>
    //     </div>
    //   </SectionBody>
    // </Section>
    <Helmet title="Đăng ký tài khoản">
      <Breadcrumb className="grid" title="Đăng ký tài khoản" />
      <Section>
        <SectionBody>
          <div className="auth-login">
            <div className="login-title">
              <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
              <div className="sub-title">
                <span>Bạn đã có toàn khoản ? </span>
                <Link to="/login" className="login-link">
                  Đăng nhập tại đây
                </Link>
              </div>
              <h3 className="auth-info">THÔNG TIN CÁ NHÂN</h3>
            </div>

            <div className="login-form">
              <form>
                <div className="form-group1">
                  <label>
                    Họ<span> *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Họ"
                    className="form-control1"
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
                  />
                </div>
                <button className="login-btn">Đăng ký</button>
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
