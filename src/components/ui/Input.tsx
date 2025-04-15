import { InputHTMLAttributes } from "react";

type InputVariant = "default" | "rounded" | "underlined";

type InputProps = {
  variant?: InputVariant;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  variant = "default",
  className = "",
  ...props
}: InputProps) => {
  const baseClasses = "w-full px-4 py-2 outline-none border text-sm";

  const variantClasses = {
    default: "border-gray-300 focus:border-black rounded-none",
    rounded: "border-gray-300 focus:border-black rounded",
    underlined:
      "border-t-0 border-l-0 border-r-0 border-b border-gray-300 focus:border-black rounded-none",
  };

  return (
    <input
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
};
