import { Container } from '@/components/shared';
import { ContentCard } from '@/components/ui/cards';
import { Search } from '@/components/ui/custom';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Container fluid>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Explore</h2>
          </div>
          {/* <Search /> */}
          <div className="grid grid-cols-4 gap-4">
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
