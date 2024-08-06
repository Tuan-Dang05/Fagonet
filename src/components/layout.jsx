import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from './spinner';
const ScrollPage = lazy(() => import('./scroll/index'));
const Nav = lazy(() => import('./nav'));
const Footer = lazy(() => import('./footer/index'));
function Layout() {
  return (
    <div className='web'>
      <Suspense fallback={<Spinner />}>
        <div style={{marginBottom: '100px'}}>
          <Nav />
          </div>
        <Outlet />
        <div style={{position: 'absolute', width: '100%'}}>
        <Footer />
        </div>
        <ScrollPage />
      </Suspense>
    </div>
  );
}

export default Layout;
