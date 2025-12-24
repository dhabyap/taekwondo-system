import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { LandingPage } from './pages/LandingPage';

// Placeholder components for routes we haven't built yet
import { Members } from './pages/Members';
import { Attendance } from './pages/Attendance';
import { Schedule } from './pages/Schedule';
import { Grading } from './pages/Grading';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="members" element={<Members />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="grading" element={<Grading />} />
      </Route>
    </Routes>
  );
}

export default App;
