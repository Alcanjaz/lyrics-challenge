import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const base =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  // Use DS tokens for primary variant
  primary:
    'ly-ds-bg-primary ly-ds-text-button hover:ly-ds-bg-hover-active active:ly-ds-bg-hover-active focus-visible:ring-[#181818]',
  // Keep existing semantics for others until tokens are defined for them
  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300',
};

export function Button({
  className = '',
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
      {children ?? 'Button'}
    </button>
  );
}

export default Button;
