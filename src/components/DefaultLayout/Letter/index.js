import "./Letter.scss";
import z from "../../../assets/img/letter/zalo.png";
import f from "../../../assets/img/letter/facebook.png";
import e from "../../../assets/img/letter/email.png";

const Letter = () => {
  return (
    <div className="letter">
      <div className="letter__main grid">
        <div className="letter__media">
          <img src={f} className="letter__image facebook" />
          <img src={z} className="letter__image" />
        </div>
        {/* <div className="letter__info">
          <div className="letter__title">
            <img src={e} className="letter__image" />
            <div className="letter__des">
              <p>Bạn muốn nhận khuyễn mãi đặc biệt?</p>
              <span>Đăng ký ngay.</span>
            </div>
          </div>
          <form className="letter__form">
            <input
              type="email"
              placeholder="Thả email nhận ngay ưu đãi..."
              className="letter__form-input"
            />
            <button type="button" className="letter__form-btn">
              Đăng ký
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Letter;
