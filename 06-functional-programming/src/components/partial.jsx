export const partialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        color: "white",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const RedButtonPartial = partialComponent(Button, { color: "crimson" });
export const GreenSmallButtonPartial = partialComponent(Button, {
  color: "green",
  size: "small",
});
