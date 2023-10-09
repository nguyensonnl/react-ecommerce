import "./Footer.scss";
import { Link } from "react-router-dom";
import methodPayment from "../../assets/img/Footer/footer_trustbadge.jpg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__main grid">
        <div className="footer__info">
          <h4 className="title">Nơi an tâm mua hàng chính hãng</h4>
          <div className="brand">SWatch</div>
          <div className="desc">
            SWatch tự hào là đại lý chính hãng của các thương hiệu đồng hồ nổi
            tiếng như I&W Carnival, Carnival, Lobinni, Borman, Teintop, Aouke...
            tại Việt Nam.
          </div>
          <p>
            <span>Địa chỉ:</span> Hồ Chí Minh, Việt Nam
          </p>
          <p>
            <span>Số điện thoại:</span> 0376.940.314
          </p>
          <p>
            <span>Email:</span> lamsonwatch@gmail.com
          </p>
        </div>

        <div className="footer__policy">
          <h4 className="title">Chính sách</h4>
          <ul className="list__group">
            <li className="group__item">
              <Link to="#" className="item__link">
                Giới thiệu
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Điều khoản dịch vụ
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Chính sách giao hàng
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Chính sách đổi trả hàng
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Chính sách bảo hành
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Chính sách bảo mật
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Giấy chứng nhận đại lý
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__guide">
          <h4 className="title">Hưỡng dẫn</h4>
          <ul className="list__group">
            <li className="group__item">
              <Link to="#" className="item__link">
                Hưỡng dẫn thanh toán
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Hưỡng dẫn mua online
              </Link>
            </li>
            <li className="group__item">
              <Link to="#" className="item__link">
                Hưỡng dẫn mua trả góp
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h4 className="title">Tổng đài hỗ trợ</h4>
          <ul className="">
            <li className="contact__item">
              Hotline/Zalo mua hàng: 0376.940.314
            </li>
            <li className="contact__item">
              Hotline/Zalo bảo hành: 0376.940.314
            </li>
            <h4>Phương thức thanh toán</h4>
            <img
              src={methodPayment}
              alt="Method payments"
              className="image__method-payments"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
