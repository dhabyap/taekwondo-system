import { LayoutDashboard, Users, UserCheck, Calendar, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Taekwondo</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/admin" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/members" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={20} />
          <span>Members</span>
        </NavLink>
        <NavLink to="/admin/attendance" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <UserCheck size={20} />
          <span>Attendance</span>
        </NavLink>
        <NavLink to="/admin/schedule" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Calendar size={20} />
          <span>Schedule</span>
        </NavLink>
        <NavLink to="/admin/grading" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Award size={20} />
          <span>Grading</span>
        </NavLink>
      </nav>
    </aside>
  );
}
