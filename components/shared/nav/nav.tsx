import { cn } from '@/lib/utils';
import Link from 'next/link';

const Nav = ({ className, ...rest }: { className?: string }) => {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...rest}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/ios"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        IOS
      </Link>
      <Link
        href="/android"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Android
      </Link>
    </nav>
  );
};

export default Nav;
