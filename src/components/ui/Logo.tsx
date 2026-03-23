import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  symbolClassName?: string;
  variant?: "principal" | "inverted" | "monochrome" | "premium";
  iconOnly?: boolean;
}

export const Logo = ({ className, symbolClassName, variant = "principal", iconOnly = false }: LogoProps) => {
  const textColor = {
    principal: "text-brand-ink dark:text-white",
    inverted: "text-white",
    monochrome: "text-black",
    premium: "text-brand-primary",
  }[variant];

  const symbolColor = {
    principal: "text-brand-ink dark:text-white",
    inverted: "text-white",
    monochrome: "text-black",
    premium: "text-brand-primary",
  }[variant];

  const Symbol = () => (
    <svg
      viewBox="0 10 95 85"
      fill="none"
      className={cn("h-[1.12em] w-auto inline-block -ml-[0.02em] translate-y-[4%]", symbolColor, symbolClassName)}
    >
      <mask id={`gap-mask-${variant}`}>
        <rect x="-20" y="-20" width="150" height="150" fill="white" />
        <path
          d="M 40 20 L 60 85"
          stroke="black"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      {/* Left V */}
      <path
        d="M 15 20 L 35 85 L 55 20"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        mask={`url(#gap-mask-${variant})`}
      />
      {/* Right V */}
      <path
        d="M 40 20 L 60 85 L 80 20"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (iconOnly) {
    return <Symbol />;
  }

  return (
    <div className={cn("flex flex-row items-baseline select-none", className)}>
      <span className={cn("font-heading font-bold tracking-tight", textColor)}>
        Creati
      </span>
      <Symbol />
    </div>
  );
};
