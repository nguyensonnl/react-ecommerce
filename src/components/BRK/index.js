import React from "react";
import "./brk.scss";

const BRK = () => {
  return (
    <div className="container">
      Trong quá trình khai thác, lô hàng với số MAWB: 978 2196 3384 và HAWB:
      AEC2411003 nhưng thực tế khi khai thác thì lô hàng này lại có số MAWB: 978
      2196 3884 và HAWB: AEC2411003 có khác biệt về số MAWB, tôi đã nhận hàng mà
      không kiểm tra kỹ có sự khác biệt giữa MAWB trên hệ thống và MAWB thực tế
      của lô hàng, với lỗi sai trên đã dẫn tới sự việc lô hàng với số MAWB: 978
      2196 3384 và HAWB: AEC2411003 bị MSCA nhưng lại nhận nhầm vào lô hàng có
      MAWB: 978 2196 3884 và HAWB: AEC2411003 bị FDCA dest SGN, ảnh hưởng rất
      nhiều quá trình lưu kho cũng như thông báo sớm cho hãng để giải quyết
    </div>
  );
};

export default BRK;
