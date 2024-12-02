import React from "react";

const BRK = () => {
  return (
	<div className="container">
	Trong quá trình khai thác, lô hàng này với số mawb và hawb nhưng thực tế khi khai thác thì lô hàng này lại có số mawb và hawb có khác biệt về số mawb, tôi đã nhận hàng mà không kiểm tra kỹ có sự khác biệt giữa mawb trên hệ thống và mawb thực tế của lô hàng, với lỗi sai trên đã dẫn tới sự việc lô hàng với số mawb và hawb bị MSCA nhưng lại nhận nhầm vào lô hàng có mawb và hawb bị FDCA dest SGN, ảnh hưởng rất nhiều quá trình lưu kho cũng như thông báo sớm cho hãng để giải quyết
	</div>
    
  );
};

export default BRK;
