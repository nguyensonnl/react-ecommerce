import React from "react";
import { Link } from "react-router-dom";
import "./brk.scss";

const BRK = () => {
  return (
    <div className="container">
      <div>
        Trong quá trình khai thác, lô hàng với số MAWB: 978 2196 3384 và HAWB:
        AEC2411003 nhưng thực tế khi khai thác thì lô hàng này lại có số MAWB:
        978 2196 3884 và HAWB: AEC2411003 có khác biệt về số MAWB, tôi đã nhận
        hàng mà không kiểm tra kỹ có sự khác biệt giữa MAWB trên hệ thống và
        MAWB thực tế của lô hàng, với lỗi sai trên đã dẫn tới sự việc lô hàng
        với số MAWB: 978 2196 3384 và HAWB: AEC2411003 bị MSCA nhưng lại nhận
        nhầm vào lô hàng có MAWB: 978 2196 3884 và HAWB: AEC2411003 bị FDCA dest
        SGN, ảnh hưởng rất nhiều quá trình lưu kho cũng như thông báo sớm cho
        hãng để giải quyết
      </div>

      <div>
        Dư FHL, trên hàng không hawb, nhận vào mawb: thao tác giống add group,
        vào location Missing awb, trên hàng không hawb, hệ thống có hawb, nhận
        vào hawb bình thường
      </div>

      <Link to="/khai-thac">Khai thác</Link>
      <Link to="/rap-rkn">RKN - RAP</Link>
      <Link to="/van-de-khai-thac">Vấn đề khai thác</Link>
      <Link to="/khai-thac-vun-val">Khai thác vun val</Link>
      <Link to="/khai-thac-vun-escort">Khai thác vun escort</Link>
      <Link to="/khai-thac-hang-lanh">Khai thác hàng lạnh</Link>
      <Link to="/khai-thac-mail">Khai thác mail</Link>
      <Link to="/khoanh-mnf">Khoanh MNF</Link>
      <Link to="/mail">Mail</Link>
    </div>
  );
};

export default BRK;
