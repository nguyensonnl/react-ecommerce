const Helmet = (props) => {
  document.title = props.title ? props.title : "...Loading";
  return <>{props.children}</>;
};

export default Helmet;
