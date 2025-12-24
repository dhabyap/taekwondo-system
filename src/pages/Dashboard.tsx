import { Users, Award, UserCheck, TrendingUp, UserPlus, ClipboardCheck, Calendar } from 'lucide-react';
import './Dashboard.css';

export function Dashboard() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="dashboard">
      <div className="dashboard-welcome">
        <div>
          <h1>Welcome back, Admin!</h1>
          <p className="text-gray">{currentDate}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-btn action-primary">
          <UserPlus size={20} />
          <span>New Student</span>
        </button>
        <button className="action-btn action-secondary">
          <ClipboardCheck size={20} />
          <span>Mark Attendance</span>
        </button>
        <button className="action-btn action-accent">
          <Calendar size={20} />
          <span>Schedule Class</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-stats">
        <div className="stat-card stat-card-red">
          <div className="stat-content">
            <h3>Active Students</h3>
            <div className="value">124</div>
            <div className="trend positive">
              <TrendingUp size={16} />
              <span>+12% this month</span>
            </div>
          </div>
          <div className="stat-icon">
            <Users size={28} />
          </div>
        </div>

        <div className="stat-card stat-card-blue">
          <div className="stat-content">
            <h3>Attendance Rate</h3>
            <div className="value">85%</div>
            <div className="trend neutral">
              <span>Avg. last 7 days</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="stat-icon">
            <UserCheck size={28} />
          </div>
        </div>

        <div className="stat-card stat-card-yellow">
          <div className="stat-content">
            <h3>Upcoming Grading</h3>
            <div className="value">15</div>
            <div className="trend positive">
              <span>Students eligible</span>
            </div>
          </div>
          <div className="stat-icon">
            <Award size={28} />
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon activity-icon-success">
                <UserPlus size={18} />
              </div>
              <div className="activity-info">
                <strong>New Student Registration</strong>
                <p className="text-sm text-gray">John Doe joined the white belt class</p>
              </div>
              <span className="text-sm text-gray">2h ago</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon activity-icon-warning">
                <Award size={18} />
              </div>
              <div className="activity-info">
                <strong>Belt Promotion</strong>
                <p className="text-sm text-gray">Sarah Lee promoted to Yellow Belt</p>
              </div>
              <span className="text-sm text-gray">5h ago</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon activity-icon-info">
                <ClipboardCheck size={18} />
              </div>
              <div className="activity-info">
                <strong>Class Attendance</strong>
                <p className="text-sm text-gray">15 students attended Evening Sparring</p>
              </div>
              <span className="text-sm text-gray">Yesterday</span>
            </div>
          </div>
        </div>
        
        <div className="upcoming-classes">
          <h3>Today's Classes</h3>
          <div className="activity-list">
            <div className="class-item">
              <div className="class-time">16:00</div>
              <div className="class-info">
                <strong>Kids Foundation</strong>
                <p className="text-sm text-gray">16:00 - 17:00 • 12 students</p>
              </div>
            </div>
            <div className="class-item">
              <div className="class-time">18:30</div>
              <div className="class-info">
                <strong>Adults Advanced</strong>
                <p className="text-sm text-gray">18:30 - 20:00 • 8 students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
