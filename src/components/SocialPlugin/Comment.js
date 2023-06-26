import { useEffect } from "react";
import { initFacebookSDK } from "../../utils/initFacebookSDK";

const Comment = (props) => {
  const { dataHref, width } = props;
  console.log(dataHref);

  useEffect(() => {
    initFacebookSDK();
  }, []);

  return (
    <div
      className="fb-comments"
      data-href={dataHref}
      data-width={width}
      data-numposts="5"
    ></div>
  );
};

export default Comment;
