import { MantineProvider } from '@mantine/core';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, LayoutRouteProps } from 'react-router-dom';
import appRouter from '../appRoutes';
import { generateUuid } from '../utils/general.utils';
import '../utils/global.css';

interface RouteWithNested extends LayoutRouteProps {
  // eslint-disable-next-line react/require-default-props
  nested?: LayoutRouteProps[];
}

const AppRouter: React.FC<{ appRoutes: RouteWithNested[] }> = ({ appRoutes }) => (
  <Router>
    <Routes>
      {appRoutes.map((route) => {
        const uuid = generateUuid();
        return <Route key={uuid} {...route} />;
      })}
    </Routes>
  </Router>
);

const AppConfig = () => (
  <MantineProvider
    theme={{
      fontFamily: "'Cera Round Pro', sans-serif;",
      headings: {
        fontFamily: "'Cera Round Pro', sans-serif;",
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <AppRouter appRoutes={appRouter} />
  </MantineProvider>
);

export default AppConfig;
