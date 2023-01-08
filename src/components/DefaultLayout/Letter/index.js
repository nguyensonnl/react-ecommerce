import "./Letter.scss";
import Grid from "../../Grid/";

const Letter = () => {
  return (
    <div className="letter">
      <Grid>
        <div className="letter__main">
          <div className="letter__main__title">
            <div className="letter__main__title-register">
              Đăng ký nhận bản tin
            </div>
            <p className="letter__main__title-des">
              Nhận thông tin cập nhật qua Email về cửa hàng mới nhất của chúng
              tôi và <span>các ưu đãi đặc biệt.</span>
            </p>
          </div>
          <form className="letter__main__form">
            <input
              type="email"
              placeholder="Your email address"
              className="letter__main__form-input"
            />
            <button type="button" className="letter__main__form-btn">
              Đăng ký
            </button>
          </form>
        </div>
      </Grid>
    </div>
  );
};

export default Letter;
