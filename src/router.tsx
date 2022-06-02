/* eslint-disable react/no-unused-prop-types */
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRouter, Preloader } from 'src/components';

interface RouterItem {
  path: string | string[];
  Component: React.FC;
  subRoutes?: RouterItem[];
  isProtected?: boolean;
}

const ROUTES: RouterItem[] = [
  {
    path: '*',
    Component: lazy(() => import('src/pages/404')),
  },
  {
    path: '/',
    Component: lazy(() => import('src/App')),
  },
  {
    path: '/login',
    Component: lazy(() => import('src/pages/login')),
  },
  {
    path: '/community',
    Component: lazy(() => import('src/pages/community')),
  },
  {
    path: 'profile',
    Component: lazy(() => import('src/pages/my_profile')),
    isProtected: true,
    subRoutes: [
      {
        path: ':userId',
        Component: lazy(() => import('src/pages/user_profile')),
      },
    ],
  },
];

export const MainRouter: React.FC = () => {
  return (
    <Routes>
      {ROUTES.map(({ Component, path, isProtected, subRoutes }: RouterItem) => {
        const pathsArray = Array.isArray(path) ? path : [path];
        return pathsArray.map((path: string) => (
          <>
            <Route
              path={path}
              key={path}
              element={
                <Suspense fallback={<Preloader />}>
                  {isProtected ? (
                    <PrivateRouter>
                      <Component />
                    </PrivateRouter>
                  ) : (
                    <Component />
                  )}
                </Suspense>
              }
            />
            {!!subRoutes?.length &&
              subRoutes
                .map(({ path, Component }: RouterItem) => {
                  const pathsArray = Array.isArray(path) ? path : [path];
                  return pathsArray.map((sub_path: string) => {
                    return (
                      <Route
                        path={`${path}/${sub_path}`}
                        key={`${path}/${sub_path}`}
                        element={
                          <Suspense fallback={<Preloader />}>
                            {isProtected ? (
                              <PrivateRouter>
                                <Component />
                              </PrivateRouter>
                            ) : (
                              <Component />
                            )}
                          </Suspense>
                        }
                      />
                    );
                  });
                })
                .flat(1)}
          </>
        ));
      })}
    </Routes>
  );
};
