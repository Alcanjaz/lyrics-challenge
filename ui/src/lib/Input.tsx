import * as React from 'react';
import { cn } from './utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', icon: Icon, ...props }, ref) => {
    return (
      <div className={cn('relative w-full min-w-0', className)}>
        {Icon ? (
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden
          >
            <Icon width={18} height={18} strokeWidth={2} />
          </span>
        ) : null}
        <input
          ref={ref}
          type={type}
          className={cn(
            // Base
            'w-full min-w-0 rounded-2xl border ly-ds-bg-primary border-white/10 bg-white/5 px-3 py-2 text-base text-white placeholder:text-gray-400 outline-none transition-[box-shadow,border-color] md:text-sm',
            // Focus ring and border
            'focus-visible:border-white/20 focus-visible:ring-2 focus-visible:ring-white/30',
            // Disabled
            'disabled:cursor-not-allowed disabled:opacity-50',
            // Selection colors using our primary token where possible
            'selection:bg-[#181818] selection:text-[#cbcbcb]',
            Icon ? 'pl-9' : undefined
          )}
          aria-invalid={props['aria-invalid']}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
