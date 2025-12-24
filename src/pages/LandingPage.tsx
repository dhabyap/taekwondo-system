import { LandingNav } from '../components/LandingNav';
import { Award, Users, Target, Zap, ArrowRight } from 'lucide-react';
import './LandingPage.css';

export function LandingPage() {
  return (
    <div className="landing-page">
      <LandingNav />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <img 
          src="/src/assets/taekwondo_hero_bg.png" 
          alt="Taekwondo Training" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Master the Art of <span className="highlight">Taekwondo</span>
          </h1>
          <p className="hero-subtitle">
            Transform your mind and body through discipline, strength, and martial arts excellence
          </p>
          <div className="hero-buttons">
            <a href="#programs" className="btn btn-primary btn-lg">
              Start Your Journey <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn btn-outline btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Why Choose Taekwondo?</h2>
        <p className="section-subtitle">
          Discover the life-changing benefits of martial arts training
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon red">
              <Target size={40} />
            </div>
            <h3>Discipline & Focus</h3>
            <p>
              Develop mental clarity and self-control through structured training and traditional martial arts philosophy.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon blue">
              <Zap size={40} />
            </div>
            <h3>Physical Fitness</h3>
            <p>
              Build strength, flexibility, and endurance with dynamic workouts that challenge your entire body.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon yellow">
              <Award size={40} />
            </div>
            <h3>Self-Defense</h3>
            <p>
              Learn practical self-defense techniques that boost confidence and personal safety in any situation.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon purple">
              <Users size={40} />
            </div>
            <h3>Community</h3>
            <p>
              Join a supportive family of martial artists dedicated to growth, respect, and mutual encouragement.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">
          Classes designed for every age and skill level
        </p>
        
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-header">
              <h3>Kids Program</h3>
              <p className="program-age">Ages 5-12</p>
            </div>
            <div className="program-body">
              <ul className="program-features">
                <li>Fun and engaging classes</li>
                <li>Character development</li>
                <li>Anti-bullying training</li>
                <li>Confidence building</li>
                <li>Basic self-defense</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{width: '100%'}}>
                Enroll Now
              </a>
            </div>
          </div>
          
          <div className="program-card">
            <div className="program-header">
              <h3>Teen Program</h3>
              <p className="program-age">Ages 13-17</p>
            </div>
            <div className="program-body">
              <ul className="program-features">
                <li>Advanced techniques</li>
                <li>Competition training</li>
                <li>Leadership skills</li>
                <li>Physical conditioning</li>
                <li>Stress management</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{width: '100%'}}>
                Enroll Now
              </a>
            </div>
          </div>
          
          <div className="program-card">
            <div className="program-header">
              <h3>Adult Program</h3>
              <p className="program-age">Ages 18+</p>
            </div>
            <div className="program-body">
              <ul className="program-features">
                <li>Complete fitness workout</li>
                <li>Self-defense mastery</li>
                <li>Flexibility training</li>
                <li>Belt progression system</li>
                <li>Mind-body wellness</li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{width: '100%'}}>
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">Student Success Stories</h2>
        <p className="section-subtitle">
          Hear from our amazing martial arts family
        </p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-content">
              "Taekwondo has completely transformed my life. I've gained confidence, made lifelong friends, and achieved black belt status. The instructors are incredibly supportive!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">SL</div>
              <div className="author-info">
                <h4>Sarah Lee</h4>
                <p>Black Belt, 3 Years Training</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-content">
              "My son has been attending for 2 years and the growth in his discipline and respect has been remarkable. Best decision we ever made for his development."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MJ</div>
              <div className="author-info">
                <h4>Mike Johnson</h4>
                <p>Parent of Student</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-content">
              "The adult program is fantastic! Great workout, stress relief, and I've learned practical self-defense skills. The community here is like a second family."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">EC</div>
              <div className="author-info">
                <h4>Emily Chen</h4>
                <p>Red Belt, Adult Program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Begin Your Journey Today</h2>
          <p className="cta-subtitle">
            Join hundreds of students who have transformed their lives through Taekwondo
          </p>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="cta-input"
              required
            />
            <button type="submit" className="btn btn-primary btn-lg">
              Get Started
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
              Building strong minds and bodies through the discipline of martial arts since 2015.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📍 123 Martial Arts Way</p>
            <p>📞 (555) 123-4567</p>
            <p>✉️ info@taekwondo.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Taekwondo Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
