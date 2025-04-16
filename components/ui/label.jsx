import * as React from 'react';
import { cn } from '../../lib/utils';
import * as LabelPrimitive from '@radix-ui/react-label';

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn('text-sm font-medium text-gray-700 mb-1 block', className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };