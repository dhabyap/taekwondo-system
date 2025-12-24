import { Calendar, Clock, User } from 'lucide-react';
import { MOCK_CLASSES } from '../context/mockData';
import './Schedule.css';

export function Schedule() {
  // Sort classes by date and time
  const sortedClasses = [...MOCK_CLASSES].sort((a, b) => {
    return new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime();
  });

  return (
    <div className="schedule-page">
      <div className="schedule-header">
        {/* Header content if needed */}
      </div>

      <div className="schedule-container">
        {sortedClasses.map(cls => (
          <div key={cls.id} className="class-card">
            <div className="class-header">
              <h3>{cls.name}</h3>
              <div className="class-time">
                <Clock size={16} />
                <span>{cls.time} - {parseInt(cls.time.split(':')[0]) + 1}:00</span>
              </div>
            </div>
            <div className="class-body">
              <div className="info-row">
                <Calendar size={18} />
                <span>{new Date(cls.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="info-row">
                <User size={18} />
                <span className="instructor-badge">{cls.instructor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
