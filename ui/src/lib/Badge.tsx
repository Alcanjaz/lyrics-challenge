import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-2xl px-4 py-1 text-xs font-medium ly-ds-text-button ly-ds-bg-primary hover:ly-ds-bg-hover-active active:ly-ds-bg-hover-active focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#181818] disabled:opacity-50 disabled:pointer-events-none transition-colors',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({ className = '', variant, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {children ?? 'Badge'}
      </Comp>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
