import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-full border border-primary/15 bg-primary text-primary-foreground shadow-[0_18px_40px_rgba(92,76,208,0.18)] hover:-translate-y-0.5 hover:bg-primary/95",
        destructive:
          "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "rounded-full border border-foreground/10 bg-white/86 text-foreground shadow-[0_12px_28px_rgba(17,19,27,0.06)] hover:-translate-y-0.5 hover:bg-white",
        secondary:
          "rounded-full border border-foreground/6 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "rounded-full text-foreground hover:bg-foreground/5",
        link: 
          "text-foreground underline-offset-4 hover:underline",
        hero: 
          "rounded-full border border-brand-primary/15 bg-brand-primary px-8 py-4 text-base font-semibold text-white shadow-[0_22px_48px_rgba(92,76,208,0.22)] hover:-translate-y-0.5 hover:bg-[#4D3FB0]",
        "hero-outline":
          "rounded-full border border-brand-platinum bg-white/90 px-8 py-4 text-base font-medium text-foreground shadow-[0_12px_28px_rgba(17,19,27,0.06)] hover:-translate-y-0.5 hover:border-brand-primary/20 hover:bg-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
