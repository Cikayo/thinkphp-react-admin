import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import Login from './pages/user/Login'
import NotFound from './pages/others/404'
import NotPermission from './pages/others/403'
import menus from './router/index'
import AllComponents from './pages'
import Loading from './components/Loading'
import AuthPage from '@/components/AuthPage';
import page from './store/page'

const TRoute = ({ Comp }) => {
  return <Suspense fallback={<Loading />}>
    {Comp}
  </Suspense>
}

const createRoute = (r) => {
  const route = (r) => {
    const Component = r.element && AllComponents[r.element];

    if (!Component) return;

    return (
      <Route
        key={r.route || r.key}
        index={!!r.index}
        path={r.index ? null : (r.route || r.key)}
        element={<TRoute Comp={<Component />} />}
      />
    );
  };

  if (!r.element && r.children) {
    return (
      <Route key={r.route || r.key} path={r.route || r.key}>
        {
          r.children.map((subR) => route(subR))
        }
      </Route>
    )
  }

  return route(r);
}


function Page() {
  const content = menus.menus.map(createRoute);

  let location = useLocation();
  useEffect(() => {
    if (location.pathname !== page.activeSiderKey) {
      page.changeActiveSiderKey(location.pathname)
    }
  }, [])
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/403" element={<NotPermission />} />
      {
        menus.others.map(r => {
          const Component = r.element && AllComponents[r.element];
          if (!Component) return;
          return (
            <Route
              key={r.route || r.key}
              path={r.index ? null : (r.route || r.key)}
              element={
                <AuthPage><TRoute Comp={<Component />} /></AuthPage>}
            />
          );
        })
      }
      <Route path="/" element={<App />}>
        {content}
      </Route>
    </Routes>
  )
}

export default Page;