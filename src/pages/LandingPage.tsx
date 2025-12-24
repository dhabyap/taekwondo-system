import { LandingNav } from '../components/LandingNav';
import { Award, Users, Target, Zap, ArrowRight } from 'lucide-react';
import './LandingPage.css';
import heroBg from "../assets/taekwondo_hero_bg.png";


export function LandingPage() {
  return (
    <div className="landing-page">
      <LandingNav />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <img 
          src={heroBg}
          alt="Taekwondo Training" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Kuasai Seni <span className="highlight">Taekwondo</span>
          </h1>
          <p className="hero-subtitle">
            Transformasikan pikiran dan tubuh Anda melalui disiplin, kekuatan, dan keunggulan seni bela diri
          </p>
          <div className="hero-buttons">
            <a href="#programs" className="btn btn-primary btn-lg">
              Mulai Perjalanan Anda <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn btn-outline btn-lg">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Mengapa Memilih Taekwondo?</h2>
        <p className="section-subtitle">
          Temukan manfaat luar biasa dari latihan seni bela diri
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon red">
              <Target size={40} />
            </div>
            <h3>Disiplin & Fokus</h3>
            <p>
              Kembangkan kejernihan mental dan kontrol diri melalui latihan terstruktur dan filosofi seni bela diri tradisional yang terbukti efektif.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon blue">
              <Zap size={40} />
            </div>
            <h3>Kebugaran Fisik</h3>
            <p>
              Bangun kekuatan, kelenturan, dan daya tahan dengan latihan dinamis yang menantang seluruh tubuh Anda secara menyeluruh.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon yellow">
              <Award size={40} />
            </div>
            <h3>Bela Diri Praktis</h3>
            <p>
              Pelajari teknik bela diri praktis yang meningkatkan kepercayaan diri dan keamanan pribadi Anda dalam situasi apapun.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon purple">
              <Users size={40} />
            </div>
            <h3>Komunitas Solid</h3>
            <p>
              Bergabunglah dengan keluarga besar para praktisi seni bela diri yang berdedikasi pada pertumbuhan, rasa hormat, dan saling mendukung.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <h2 className="section-title">Program Kami</h2>
        <p className="section-subtitle">
          Kelas dirancang untuk semua usia dan tingkat kemampuan
        </p>
        
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-header">
              <h3>Program Anak</h3>
              <p className="program-age">Usia 5-12 Tahun</p>
            </div>
            <div className="program-body">
              <ul className="program-features">
                <li>Kelas yang menyenangkan dan engaging</li>
                <li>Pengembangan karakter</li>
                <li>Pelatihan anti-perundungan</li>
                <li>Membangun kepercayaan diri</li>
                <li>Bela diri dasar</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{width: '100%'}}>
                Daftar Sekarang
              </a>
            </div>
          </div>
          
          <div className="program-card">
            <div className="program-header">
              <h3>Program Remaja</h3>
              <p className="program-age">Usia 13-17 Tahun</p>
            </div>
            <div className="program-body">
              <ul className="program-features">
                <li>Teknik lanjutan</li>
                <li>Pelatihan kompetisi</li>
                <li>Keterampilan kepemimpinan</li>
                <li>Kondisi fisik optimal</li>
                <li>Manajemen stres</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{width: '100%'}}>
                Daftar Sekarang
              </a>
            </div>
          </div>
          
          <div className="program-card">
            <div className="program-header">
              <h3>Program Dewasa</h3>
              <p className="program-age">Usia 18+ Tahun</p>
            </div>
            <div className="program-body">
              <ul className="program-features">
                <li>Latihan kebugaran menyeluruh</li>
                <li>Penguasaan bela diri</li>
                <li>Pelatihan kelenturan</li>
                <li>Sistem progressi sabuk</li>
                <li>Kesehatan pikiran-tubuh</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{width: '100%'}}>
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">Kisah Sukses Siswa</h2>
        <p className="section-subtitle">
          Dengarkan dari keluarga besar seni bela diri kami
        </p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-content">
              "Taekwondo telah sepenuhnya mengubah hidup saya. Saya mendapatkan kepercayaan diri, menemukan teman seumur hidup, dan mencapai sabuk hitam. Instruktur di sini luar biasa suportif!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">SL</div>
              <div className="author-info">
                <h4>Sarah Lee</h4>
                <p>Sabuk Hitam, 3 Tahun Latihan</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-content">
              "Anak saya telah berlatih selama 2 tahun dan pertumbuhan dalam disiplin dan rasa hormatnya sungguh luar biasa. Keputusan terbaik yang pernah kami buat untuk perkembangannya."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MJ</div>
              <div className="author-info">
                <h4>Mike Johnson</h4>
                <p>Orang Tua Siswa</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-content">
              "Program dewasa sangat fantastis! Latihan yang hebat, menghilangkan stres, dan saya telah mempelajari keterampilan bela diri praktis. Komunitas di sini seperti keluarga kedua."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">EC</div>
              <div className="author-info">
                <h4>Emily Chen</h4>
                <p>Sabuk Merah, Program Dewasa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Mulai Perjalanan Anda Hari Ini</h2>
          <p className="cta-subtitle">
            Bergabunglah dengan ratusan siswa yang telah mengubah hidup mereka melalui Taekwondo
          </p>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              className="cta-input"
              required
            />
            <button type="submit" className="btn btn-primary btn-lg">
              Mulai Sekarang
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TAEKWONDO</h3>
            <p>
              Membangun pikiran dan tubuh yang kuat melalui disiplin seni bela diri sejak 2015.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Tautan Cepat</h3>
            <ul className="footer-links">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#programs">Program</a></li>
              <li><a href="#features">Fitur</a></li>
              <li><a href="#testimonials">Testimoni</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Kontak</h3>
            <p>📍 Jl. Seni Bela Diri No. 123</p>
            <p>📞 (021) 123-4567</p>
            <p>✉️ info@taekwondo.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sistem Manajemen Taekwondo. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
