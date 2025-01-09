export type ButtonVariant = "primary" | "secondary" | "outlined" | "warning" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
