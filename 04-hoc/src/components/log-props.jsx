export const logProps = (Component) => {
  return (props) => {
    return <Component {...props} />; 
  };
};
