import { useEffect } from "react";
import { initFacebookSDK } from "../../utils/initFacebookSDK";

const Comment = (props) => {
  const { dataHref, width, slug } = props;

  useEffect(() => {
    initFacebookSDK();
  }, [slug]);

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
