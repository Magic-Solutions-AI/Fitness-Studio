import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
  ariaLabel,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 px-4 md:px-7 py-4 text-[12px] md:text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-300 ease-out whitespace-nowrap cursor-pointer";

  const variants = {
    solid:
      "bg-[#22c55e] text-[#0a0a09] hover:bg-[#eeece4] hover:text-[#0a0a09] shadow-lg shadow-[#22c55e]/10 active:scale-[0.98]",
    outline:
      "border border-[#eeece4]/45 text-[#eeece4] hover:border-[#eeece4] hover:bg-[#eeece4]/10 active:scale-[0.98]",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
