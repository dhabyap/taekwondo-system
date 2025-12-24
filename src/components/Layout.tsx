import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './Layout.css';

export function Layout() {
  const location = useLocation();
  
  const getTitle = () => {
    switch(location.pathname) {
      case '/admin': return 'Dashboard';
      case '/admin/members': return 'Members';
      case '/admin/attendance': return 'Attendance';
      case '/admin/schedule': return 'Schedule';
      case '/admin/grading': return 'Grading';
      default: return 'Taekwondo System';
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
