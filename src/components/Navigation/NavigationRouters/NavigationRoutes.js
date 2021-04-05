import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Spinner from '../../../components/Spinner';
import JoinRoutes from './JoinRoutes';

const NavigationRoutes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <JoinRoutes />
    </Switch>
  </Suspense>
);

export default NavigationRoutes;
