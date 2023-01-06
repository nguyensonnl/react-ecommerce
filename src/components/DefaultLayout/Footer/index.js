import React from "react";
import Grid from "../../Grid";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <Grid>
        <div className="footer__main">
          <ul className="footer__info">
            <h3>Thông tin liên hệ</h3>
            <li>Địa chỉ: Việt Nam, HCM city, Quận 2</li>
            <li>Số điện thoại: +393300293039 / (+81) 30 0393 3933</li>
            <li>Giờ: 09:00 - 18:00. Mon - Sat</li>
            <h3>Theo dõi chúng tôi</h3>
            <ul className="footer__icon">
              <li>
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </ul>
          <ul className="footer__contact">
            <h3>Về chúng tôi</h3>
            <li>Thông tin giao hàng</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản & điều kiện</li>
            <li>Liên hệ chúng tôi</li>
          </ul>
          <ul className="footer__account">
            <h3>Đăng nhập</h3>
            <li>Xem giỏ hàng</li>
            <li>Sản phẩm yêu thích</li>
            <li>Theo dõi đơn hàng của tôi</li>
            <li>Cứu giúp</li>
          </ul>
          <ul className="footer__download">
            <h3>Từ App Store hay Goole Play</h3>
            <li className="footer__apps">
              <img src="" alt="" className="footer__app-store" />
              <img src="" alt="" className="footer__ch-play" />
            </li>
            <li>Cổng thanh toán an toàn</li>
          </ul>
        </div>
      </Grid>
    </section>
  );
};

export default Footer;
