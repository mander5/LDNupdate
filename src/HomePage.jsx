import { motion } from 'framer-motion';
import heroImage from './assets/hero-image.jpg';
import logo from './assets/LDNlogowhite.png';
import logoBlack from './assets/LDNlogo.png';
import { useState } from 'react';
import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* HEADER SECTION */}
      <header className='header'>
        <div className='header-content'>
          <img src={logo} alt='LDN Sport Social Logo' className='logo' />

          {/* Burger Menu Button */}
          <button
            className='burger-menu'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href='#home'>Home</a>
            <a href='#about'>About Us</a>
            <a href='#services'>Services</a>
            <a href='#contact'>Contact</a>
            <button className='cta-button'>Get Started</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero' id='home'>
        <motion.img
          src={heroImage}
          alt='Sports action'
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className='hero-content'>
          <h1>Elevate Your Game</h1>
          <p>Connecting brands with passionate sports fans worldwide</p>
          <button className='hero-button'>Learn More</button>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className='about'
        id='about'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='about-content'>
          <h2>Who We Are</h2>
          <p>
            We connect brands with passionate sports fans through dynamic
            advertising and sponsorship solutions.
          </p>
        </div>
        <div className='about-logo'>
          <img src={logoBlack} alt='LDN Sport Social Logo' />
        </div>
      </motion.section>

      {/* Services Section */}
      <section className='services' id='services'>
        <h2>Our Services</h2>
        <div className='services-grid'>
          <motion.div className='service-card' whileHover={{ scale: 1.05 }}>
            <h3>Sponsorship and Activations</h3>
            <p>Create meaningful brand connections.</p>
          </motion.div>
          <motion.div className='service-card' whileHover={{ scale: 1.05 }}>
            <h3>Social Media Campaigns</h3>
            <p>Leverage digital platforms for maximum reach.</p>
          </motion.div>
          <motion.div className='service-card' whileHover={{ scale: 1.05 }}>
            <h3>Stadium Advertising</h3>
            <p>Engage fans live in the action.</p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='cta'>
        <h2>Let’s Work Together!</h2>
        <p>Get in touch and take your brand to the next level.</p>
        <button className='cta-button'>Contact Us</button>
      </section>

      {/* Footer Section */}
      <footer className='footer'>
        <div className='footer-content'>
          <img src={logo} alt='LDN Sport Social Logo' className='footer-logo' />
          <p>
            LDN Sport Social - Your partner in sports advertising and
            sponsorship
          </p>
          <div className='company-info'>
            <p>LDN Sport Social Limited</p>
            <p>Unit 1, Kennet House, 8 Enterprise Way</p>
            <p>London SW18 1GF UK</p>
            <p>Company Registration No: 14487021</p>
            <p>VAT Reg No. 430084532</p>
            <p>©2022 All rights reserved.</p>
          </div>

          <nav className='footer-nav'>
            <a
              href='https://twitter.com/ldnsportsocial'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaXTwitter />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100088593576706'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
            <a
              href='https://www.instagram.com/ldn.sport.social/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.tiktok.com/@ldnsportsocial'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTiktok />
            </a>
            <a
              href='https://www.linkedin.com/company/ldn-sport-social/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          </nav>
          <nav className='footer-nav'>
            <a href='#home'>Home</a>
            <a href='#about'>About Us</a>
            <a href='#services'>Services</a>
            <a href='#contact'>Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
