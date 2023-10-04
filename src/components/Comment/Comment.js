import { useEffect } from "react";
import { initFacebookSDK } from "../../utils/initFacebookSDK";

const Comment = (props) => {
  const { dataHref, width, slug, className } = props;

  useEffect(() => {
    initFacebookSDK();
  }, [slug]);

  return (
    <div
      className={`fb-comments ${className}`}
      data-href={dataHref}
      data-width={width}
      data-numposts="5"
    ></div>
  );
};

export default Comment;
