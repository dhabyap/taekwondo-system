import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { MOCK_STUDENTS, MOCK_CLASSES } from '../context/mockData';
import './Attendance.css';

export function Attendance() {
  const [selectedClassId, setSelectedClassId] = useState<string>(MOCK_CLASSES[0]?.id || '');
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});

  const selectedClass = MOCK_CLASSES.find(c => c.id === selectedClassId);

  const toggleAttendance = (studentId: string) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }));
  };

  const markAll = () => {
    const allPresent = MOCK_STUDENTS.reduce((acc, student) => ({
      ...acc,
      [student.id]: true
    }), {});
    setAttendance(allPresent);
  };

  const saveAttendance = () => {
    // Here we would typically make an API call
    console.log('Saving attendance for class', selectedClassId, attendance);
    alert('Attendance saved successfully!');
  };

  return (
    <div className="attendance-page">
      <div className="attendance-controls">
        <div className="control-group">
          <label>Select Class Session</label>
          <select 
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            {MOCK_CLASSES.map(cls => (
              <option key={cls.id} value={cls.id}>
                {cls.name} — {cls.date} at {cls.time} ({cls.instructor})
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={saveAttendance}>
          <CheckCircle size={18} style={{ marginRight: '8px', display: 'inline' }} />
          Save Attendance
        </button>
      </div>

      {selectedClass && (
        <div className="attendance-list">
          <div className="attendance-list-header">
            <span>Student Name</span>
            <span>Belt</span>
            <span>Status</span>
            <span className="mark-all-btn" onClick={markAll}>Mark All</span>
          </div>
          
          {MOCK_STUDENTS.filter(s => s.status === 'Active').map(student => (
            <div key={student.id} className="attendance-item">
              <span style={{ fontWeight: 500 }}>{student.name}</span>
              <span className={`belt-badge belt-${student.belt}`}>{student.belt}</span>
              <span className={`status-badge status-${student.status}`}>{student.status}</span>
              <div className="checkbox-wrapper">
                <input 
                  type="checkbox" 
                  className="attendance-checkbox"
                  checked={!!attendance[student.id]}
                  onChange={() => toggleAttendance(student.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
