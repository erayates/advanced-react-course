const classNames = {
  primary: "border-primary-500 text-primary-500",
  secondary: "border-secondary-500 text-secondary-500",
  success: "border-success-500 text-success-500",
};

type ButtonsProps = { variant: keyof typeof classNames };

const Button = ({ variant }: ButtonsProps) => (
  <button className={`border-4 ${classNames[variant]} p-2`}>Click me</button>
);

export default Button;
