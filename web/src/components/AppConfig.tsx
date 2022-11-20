import { MantineProvider } from '@mantine/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  LayoutRouteProps,
} from 'react-router-dom';
import appRouter from '../appRoutes';

interface RouteWithNested extends LayoutRouteProps {
  // eslint-disable-next-line react/require-default-props
  nested?: LayoutRouteProps[];
}

const AppRouter: React.FC<{ appRoutes: RouteWithNested[] }> = ({
  appRoutes,
}) => (
  <Router>
    <Routes>
      {appRoutes.map((route) => {
        const uuid = Math.floor(Math.random() * 2000);
        return <Route key={uuid} {...route} />;
      })}
    </Routes>
  </Router>
);

const AppConfig = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <AppRouter appRoutes={appRouter} />
  </MantineProvider>
);

export default AppConfig;
