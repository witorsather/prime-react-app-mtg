import React, { lazy, Suspense } from 'react';

const LazyMtgList = lazy(() => import('./MtgList'));

const MtgList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMtgList {...props} />
  </Suspense>
);

export default MtgList;
