import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  href,
  newTab,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-[7px] border px-5 py-3 text-center font-heading text-base font-bold uppercase tracking-[0.035em] transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 sm:px-6 disabled:cursor-not-allowed disabled:opacity-60";

  const variantClasses = {
    primary:
      "border-(--blue) bg-(--blue) text-(--navy-deep) hover:border-(--blue-hover) hover:bg-(--blue-hover) hover:text-white",
    secondary:
      "border-(--navy) bg-white text-(--navy) hover:border-(--blue) hover:bg-(--blue) hover:text-(--navy-deep)",
    dark:
      "border-(--subtle-on-dark) bg-transparent text-(--text-on-dark) hover:border-(--blue) hover:bg-(--blue) hover:text-(--navy-deep)",
    light:
      "border-(--blue) bg-(--blue) text-(--navy-deep) hover:border-white hover:bg-white hover:text-(--navy)",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
