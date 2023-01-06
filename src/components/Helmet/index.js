const Helmet = (props) => {
  document.title = "SonNLShop - " + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
