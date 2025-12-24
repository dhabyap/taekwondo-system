export interface Student {
  id: string;
  name: string;
  belt: 'White' | 'Yellow' | 'Green' | 'Blue' | 'Red' | 'Black';
  joinDate: string;
  status: 'Active' | 'Inactive';
  age: number;
}

export const MOCK_STUDENTS: Student[] = [
  { id: '1', name: 'Sarah Lee', belt: 'Yellow', joinDate: '2023-11-15', status: 'Active', age: 14 },
  { id: '2', name: 'Michael Chen', belt: 'White', joinDate: '2024-01-10', status: 'Active', age: 10 },
  { id: '3', name: 'Jessica Park', belt: 'Red', joinDate: '2022-05-20', status: 'Active', age: 17 },
  { id: '4', name: 'David Kim', belt: 'Black', joinDate: '2020-03-01', status: 'Active', age: 22 },
  { id: '5', name: 'Emma Wilson', belt: 'Blue', joinDate: '2023-01-15', status: 'Inactive', age: 12 },
];

export interface ClassSession {
  id: string;
  name: string;
  date: string;
  time: string;
  instructor: string;
}

export const MOCK_CLASSES: ClassSession[] = [
  { id: '101', name: 'Kelas Dasar Anak', date: '2025-12-24', time: '16:00', instructor: 'Master Kim' },
  { id: '102', name: 'Kelas Lanjutan Dewasa', date: '2025-12-24', time: '18:30', instructor: 'Master Lee' },
  { id: '103', name: 'Latihan Sparring', date: '2025-12-25', time: '17:00', instructor: 'Master Park' },
];
