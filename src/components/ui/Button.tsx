import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "disabled";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "text-xs uppercase tracking-wider px-4 py-2 border rounded-sm transition-colors duration-300";

  const variantClasses = {
    primary: "bg-black text-white border-black hover:bg-white hover:text-black",
    secondary:
      "bg-white text-black border-black hover:bg-black hover:text-white",
    outline:
      "bg-transparent text-black border-black hover:bg-black hover:text-white",
    disabled: "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={variant === "disabled"}
      {...props}
    >
      {children}
    </button>
  );
};
