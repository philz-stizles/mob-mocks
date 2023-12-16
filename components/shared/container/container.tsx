import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  fluid?: boolean;
};

const Container = ({
  children,
  className,
  fluid = false,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        'mx-auto',
        className,
        fluid ? 'w-11/12' : 'max-w-7xl w-10/12'
      )}
    >
      {children}
    </div>
  );
};

export default Container;
