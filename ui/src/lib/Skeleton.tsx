import * as React from 'react';
import { cn } from './utils';

export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('ly-ds-bg-tertiary animate-pulse rounded-xl', className)}
      {...props}
    />
  );
}

export default Skeleton;
