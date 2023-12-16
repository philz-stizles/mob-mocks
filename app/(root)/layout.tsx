import { Footer, Header } from '@/components/shared';
import { Fragment, PropsWithChildren } from 'react';

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Header />
      <main className="flex-1 py-12">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
