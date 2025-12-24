import { useState } from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { MOCK_STUDENTS, type Student } from '../context/mockData';
import './Grading.css';

const BELT_ORDER: Student['belt'][] = ['White', 'Yellow', 'Green', 'Blue', 'Red', 'Black'];

export function Grading() {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);

  const getNextBelt = (currentBelt: Student['belt']): Student['belt'] | null => {
    const currentIndex = BELT_ORDER.indexOf(currentBelt);
    if (currentIndex >= 0 && currentIndex < BELT_ORDER.length - 1) {
      return BELT_ORDER[currentIndex + 1];
    }
    return null;
  };

  const handlePromote = (studentId: string) => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        const nextBelt = getNextBelt(s.belt);
        if (nextBelt) {
          return { ...s, belt: nextBelt };
        }
      }
      return s;
    }));
    alert('Student promoted successfully!');
  };

  const getBeltColor = (belt: string) => {
    switch(belt) {
      case 'White': return '#d1d5db';
      case 'Yellow': return 'var(--color-yellow)';
      case 'Green': return '#10b981';
      case 'Blue': return 'var(--color-blue)';
      case 'Red': return 'var(--color-red)';
      case 'Black': return 'var(--color-black)';
      default: return 'var(--color-gray-200)';
    }
  };

  return (
    <div className="grading-page">
      <div className="grading-container">
        {students.filter(s => s.status === 'Active').map(student => {
          const nextBelt = getNextBelt(student.belt);
          return (
            <div 
              key={student.id} 
              className="student-card"
              style={{ borderTopColor: getBeltColor(student.belt) }}
            >
              <div className="student-info">
                <h3>{student.name}</h3>
                <div className="current-belt">
                  Current: <span className={`belt-badge belt-${student.belt}`}>{student.belt} Belt</span>
                </div>
              </div>

              {nextBelt ? (
                <>
                  <div className="next-belt-info">
                    <p>Eligible for promotion to:</p>
                    <div className="flex items-center gap-2">
                      <strong>{nextBelt} Belt</strong>
                      <ChevronRight size={14} className="text-gray-400" />
                    </div>
                  </div>
                  <button className="promote-btn" onClick={() => handlePromote(student.id)}>
                    <Award size={18} />
                    Promote Student
                  </button>
                </>
              ) : (
                <div className="next-belt-info">
                  <p>Highest belt rank achieved.</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
