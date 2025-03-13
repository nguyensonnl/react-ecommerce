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
      </div
	  
	  <div>
		Vào ngày nn vào luc aabb, tôi có khai thác chuyến bay SQ184
		Trong quá trình khai thác, có lô hàng với số MAWB: và HAWB: tôi đã không kiểm tra kỹ cargo label của từng kiện
		nên đã không phát hiện ra có 1 kiện có cargo label với MAWB: và HAWB: khắc biệt so với trên hệ thống, kết quả là
		lô hàng này đã bị MSCA 1 kiện và FDCA 1 kiện DEST SGN, do không phát hiện sớm và không thông báo sớm cho hãng để giải quyết
		nên đã ảnh hưởng rất nhiều trong quá trình lưu kho và phát hàng cho khách.
	  </div>

      <div>
        Dư FHL, trên hàng không hawb, nhận vào mawb: thao tác giống add group,
        vào location Missing awb, trên hàng không hawb, hệ thống có hawb, nhận
        vào hawb bình thường
      </div>

      <Link to="/khai-thac" className="item-link">
        Khai thác
      </Link>
      <Link to="/rap-rkn" className="item-link">
        RKN - RAP
      </Link>
      <Link to="/van-de-khai-thac" className="item-link">
        Vấn đề khai thác
      </Link>
      <Link to="/khai-thac-vun-val" className="item-link">
        Khai thác vun val
      </Link>
      <Link to="/khai-thac-vun-escort" className="item-link">
        Khai thác vun escort
      </Link>
      <Link to="/khai-thac-hang-lanh" className="item-link">
        Khai thác hàng lạnh
      </Link>
      <Link to="/khai-thac-mail" className="item-link">
        Khai thác mail
      </Link>
      <Link to="/khoanh-mnf" className="item-link">
        Khoanh MNF
      </Link>
      <Link to="/mail" className="item-link">
        Mail
      </Link>
    </div>
  );
};

export default BRK;
