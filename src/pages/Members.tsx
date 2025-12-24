import { useState } from 'react';
import { Plus, Search, X } from 'lucide-react';
import { type Student, MOCK_STUDENTS } from '../context/mockData';
import './Members.css';

export function Members() {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newStudent, setNewStudent] = useState<Partial<Student>>({
    name: '',
    belt: 'White',
    age: 0,
    status: 'Active'
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name) return;

    const student: Student = {
      id: Date.now().toString(),
      name: newStudent.name,
      belt: newStudent.belt as any,
      age: newStudent.age || 0,
      status: 'Active',
      joinDate: new Date().toISOString().split('T')[0]
    };

    setStudents([...students, student]);
    setIsModalOpen(false);
    setNewStudent({ name: '', belt: 'White', age: 0, status: 'Active' });
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="members-page">
      <div className="members-header">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search students..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={20} className="text-gray-400" />
        </div>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} style={{ marginRight: '8px' }} />
          Add Member
        </button>
      </div>

      <div className="members-table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Belt</th>
              <th>Age</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td><span className={`belt-badge belt-${student.belt}`}>{student.belt} Belt</span></td>
                <td>{student.age}</td>
                <td>{student.joinDate}</td>
                <td>
                  <span className={`status-badge status-${student.status}`}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'currentColor' }}></span>
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className="text-sm text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Student</h2>
              <button onClick={() => setIsModalOpen(false)}><X size={24} /></button>
            </div>
            <form onSubmit={handleAddStudent}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required
                  value={newStudent.name}
                  onChange={e => setNewStudent({...newStudent, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input 
                  type="number" 
                  required
                  value={newStudent.age}
                  onChange={e => setNewStudent({...newStudent, age: parseInt(e.target.value)})}
                />
              </div>
              <div className="form-group">
                <label>Belt Rank</label>
                <select 
                  value={newStudent.belt}
                  onChange={e => setNewStudent({...newStudent, belt: e.target.value as any})}
                >
                  <option value="White">White</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                  <option value="Black">Black</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button type="button" className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
