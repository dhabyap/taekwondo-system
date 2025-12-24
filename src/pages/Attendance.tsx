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
    alert('Kehadiran berhasil disimpan!');
  };

  return (
    <div className="attendance-page">
      <div className="attendance-controls">
        <div className="control-group">
          <label>Pilih Sesi Kelas</label>
          <select 
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
          >
            {MOCK_CLASSES.map(cls => (
              <option key={cls.id} value={cls.id}>
                {cls.name} — {cls.date} pukul {cls.time} ({cls.instructor})
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={saveAttendance}>
          <CheckCircle size={18} style={{ marginRight: '8px', display: 'inline' }} />
          Simpan Kehadiran
        </button>
      </div>

      {selectedClass && (
        <div className="attendance-list">
          <div className="attendance-list-header">
            <span>Nama Siswa</span>
            <span>Sabuk</span>
            <span>Status</span>
            <span className="mark-all-btn" onClick={markAll}>Tandai Semua</span>
          </div>
          
          {MOCK_STUDENTS.filter(s => s.status === 'Active').map(student => (
            <div key={student.id} className="attendance-item">
              <span style={{ fontWeight: 500 }}>{student.name}</span>
              <span className={`belt-badge belt-${student.belt}`}>Sabuk {student.belt === 'White' ? 'Putih' : student.belt === 'Yellow' ? 'Kuning' : student.belt === 'Green' ? 'Hijau' : student.belt === 'Blue' ? 'Biru' : student.belt === 'Red' ? 'Merah' : 'Hitam'}</span>
              <span className={`status-badge status-${student.status}`}>{student.status === 'Active' ? 'Aktif' : 'Tidak Aktif'}</span>
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
