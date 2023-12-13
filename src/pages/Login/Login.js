import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Helmet from "../../components/Helmet";
import { login } from "../../redux/customerSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stateError = {
    errorEmail: "",
    errorPassword: "",
  };

  const [formErrors, setFormErrors] = useState(stateError);

  const validateFormV1 = () => {
    setFormErrors(stateError);

    if (!email) {
      setFormErrors({
        ...stateError,
        errorEmail: "Email không được để trống",
      });
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrors({
        ...stateError,
        errorEmail: "Email không đúng định dạng",
      });
      return false;
    }

    if (!password) {
      setFormErrors({
        ...stateError,
        errorPassword: "Mật khẩu không được để trống",
      });
      return false;
    } else if (password.length < 6) {
      setFormErrors({
        ...stateError,
        errorPassword: "Mật khẩu ít nhất 6 ký tự",
      });
      return false;
    }

    return true;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const isValidForm = validateFormV1();
    if (isValidForm) {
      const result = await dispatch(login({ email, password }));

      if (result.payload === undefined) {
        setFormErrors({
          errorEmail: "Email hoặc mật khẩu không đúng",
        });
      }
    }
  };

  return (
    <Helmet title="Đăng nhập tài khoản">
      <div className="grid">
        <Breadcrumb title="Đăng nhập tài khoản" />
      </div>

      <div className="auth__container">
        <div className="auth__login">
          <div className="login__title">
            <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
            <div className="sub__title">
              <span>Bạn chưa có toàn khoản ? </span>
              <Link to="/account/register">Đăng ký tại đây</Link>
            </div>
          </div>
          <div className="login__form">
            <form onSubmit={handleSubmitForm}>
              <div className="form__container">
                <label htmlFor="email">
                  Email<span> *</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="form__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {formErrors.errorEmail && (
                  <span className="handle-error">{formErrors.errorEmail}</span>
                )}
              </div>
              <div className="form__container">
                <label htmlFor="password">
                  Mật khẩu<span> *</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Mật khẩu"
                  className="form__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {formErrors.errorPassword && (
                  <span className="handle-error">
                    {formErrors.errorPassword}
                  </span>
                )}
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
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
