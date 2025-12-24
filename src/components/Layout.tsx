import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './Layout.css';

export function Layout() {
  const location = useLocation();
  
  const getTitle = () => {
    switch(location.pathname) {
      case '/admin': return 'Beranda';
      case '/admin/members': return 'Anggota';
      case '/admin/attendance': return 'Kehadiran';
      case '/admin/schedule': return 'Jadwal';
      case '/admin/grading': return 'Kenaikan Sabuk';
      default: return 'Sistem Taekwondo';
    }
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header title={getTitle()} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
