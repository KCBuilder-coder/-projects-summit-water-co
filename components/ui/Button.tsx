import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  size?: "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-full focus-visible:outline-2";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-navy text-white hover:bg-navy-soft",
  secondary: "bg-white text-navy border border-line hover:border-navy",
  ghost: "text-navy hover:text-accent-deep",
  onDark: "bg-white text-navy hover:bg-mist",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
