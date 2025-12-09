import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import SalesList from './components/UI/SalesList';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const hideSalesBlockRoutes = ['/cart', '/login', '/signup'];
  const shouldHideSalesBlock = hideSalesBlockRoutes.includes(location.pathname);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {!shouldHideSalesBlock && <SalesList />}
      <Footer />
    </div>
  );
}

export default Layout;
