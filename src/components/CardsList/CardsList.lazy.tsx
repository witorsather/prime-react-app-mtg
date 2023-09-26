import React, { lazy, Suspense } from 'react';

const LazyCardsList = lazy(() => import('./CardsList'));

const CardsList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardsList {...props} />
  </Suspense>
);

export default CardsList;
