import { cn } from '@/lib/utils';
import React from 'react';
import { Nav } from '..';
import { UserNav } from '@/components/ui/custom';
import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  return (
    <header className={cn('hidden flex-col md:flex', className)}>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className='flex-1 flex justify-center items-center'>
            <Nav />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Upload Content</Button>
            <Button>Upgrade to Pro</Button>
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
