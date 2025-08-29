import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors',
  {
    variants: {
      variant: {
        primary:
          'ly-ds-bg-primary ly-ds-text-button hover:ly-ds-bg-hover-active active:ly-ds-bg-hover-active focus-visible:ring-[#181818]',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400',
        ghost:
          'bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, children, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      >
        {children ?? 'Button'}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
