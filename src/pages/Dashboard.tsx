import { Users, Award, UserCheck, TrendingUp, UserPlus, ClipboardCheck, Calendar } from 'lucide-react';
import './Dashboard.css';

export function Dashboard() {
  const currentDate = new Date().toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="dashboard">
      <div className="dashboard-welcome">
        <div>
          <h1>Selamat Datang Kembali, Admin!</h1>
          <p className="text-gray">{currentDate}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-btn action-primary">
          <UserPlus size={20} />
          <span>Siswa Baru</span>
        </button>
        <button className="action-btn action-secondary">
          <ClipboardCheck size={20} />
          <span>Catat Kehadiran</span>
        </button>
        <button className="action-btn action-accent">
          <Calendar size={20} />
          <span>Jadwalkan Kelas</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-stats">
        <div className="stat-card stat-card-red">
          <div className="stat-content">
            <h3>Siswa Aktif</h3>
            <div className="value">124</div>
            <div className="trend positive">
              <TrendingUp size={16} />
              <span>+12% bulan ini</span>
            </div>
          </div>
          <div className="stat-icon">
            <Users size={28} />
          </div>
        </div>

        <div className="stat-card stat-card-blue">
          <div className="stat-content">
            <h3>Tingkat Kehadiran</h3>
            <div className="value">85%</div>
            <div className="trend neutral">
              <span>Rata-rata 7 hari terakhir</span>
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
            <h3>Kenaikan Sabuk Mendatang</h3>
            <div className="value">15</div>
            <div className="trend positive">
              <span>Siswa memenuhi syarat</span>
            </div>
          </div>
          <div className="stat-icon">
            <Award size={28} />
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="recent-activity">
          <h3>Aktivitas Terbaru</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon activity-icon-success">
                <UserPlus size={18} />
              </div>
              <div className="activity-info">
                <strong>Pendaftaran Siswa Baru</strong>
                <p className="text-sm text-gray">John Doe bergabung dengan kelas sabuk putih</p>
              </div>
              <span className="text-sm text-gray">2 jam lalu</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon activity-icon-warning">
                <Award size={18} />
              </div>
              <div className="activity-info">
                <strong>Kenaikan Sabuk</strong>
                <p className="text-sm text-gray">Sarah Lee naik ke Sabuk Kuning</p>
              </div>
              <span className="text-sm text-gray">5 jam lalu</span>
            </div>
            <div className="activity-item">
              <div className="activity-icon activity-icon-info">
                <ClipboardCheck size={18} />
              </div>
              <div className="activity-info">
                <strong>Kehadiran Kelas</strong>
                <p className="text-sm text-gray">15 siswa hadir di kelas Sparring Sore</p>
              </div>
              <span className="text-sm text-gray">Kemarin</span>
            </div>
          </div>
        </div>
        
        <div className="upcoming-classes">
          <h3>Kelas Hari Ini</h3>
          <div className="activity-list">
            <div className="class-item">
              <div className="class-time">16:00</div>
              <div className="class-info">
                <strong>Kelas Dasar Anak</strong>
                <p className="text-sm text-gray">16:00 - 17:00 • 12 siswa</p>
              </div>
            </div>
            <div className="class-item">
              <div className="class-time">18:30</div>
              <div className="class-info">
                <strong>Kelas Lanjutan Dewasa</strong>
                <p className="text-sm text-gray">18:30 - 20:00 • 8 siswa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
