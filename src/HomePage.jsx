import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroImage from './assets/allypally.jpg';
import aboutImage from './assets/gallery27.jpg';
import workImg1 from './assets/hero-image.jpg';
import workImg2 from './assets/hero-image-old.jpg';
import workImg3 from './assets/hero-image-old2.jpg';
import workImg4 from './assets/hero-image-old4.jpg';
import logo from './assets/LDNlogowhite.png';
import partnerLogo1 from './assets/logo1.png';
import partnerLogo2 from './assets/logo2.png';
import partnerLogo3 from './assets/logo3.png';
import partnerLogo4 from './assets/logo4.png';
import partnerLogo5 from './assets/logo5.png';

const partners = [
  { src: partnerLogo1, alt: 'Village Hotels', invert: true },
  { src: partnerLogo2, alt: 'Crep Protect', invert: true },
  { src: partnerLogo3, alt: 'Arnold Clark', invert: false },
  { src: partnerLogo4, alt: 'CT1', invert: false },
  { src: partnerLogo5, alt: 'Footasylum', invert: false },
];
import { FaTiktok, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ContactModal from './ContactModal.jsx';

const workItems = [
  { tag: 'Sponsorship', title: 'Pitchside Takeover', desc: 'In-stadium brand presence across a full season of fixtures.', img: workImg1 },
  { tag: 'Social', title: 'Matchday, Always-On', desc: 'A content engine turning every fixture into shareable moments.', img: workImg2 },
  { tag: 'Activation', title: 'Fan Zone Live', desc: 'A branded live experience that put fans at the heart of the action.', img: workImg3 },
  { tag: 'Strategy', title: 'Entering the Game', desc: 'Positioning a challenger brand for credible entry into sport.', img: workImg4 },
];

const pillars = [
  {
    num: '01',
    title: 'Sponsorship',
    desc: 'We find your brand its authentic place in sport and make the partnership work hard.',
    deliverables: ['Rights & deal strategy', 'Stadium & pitchside', 'Athlete & club partnerships'],
  },
  {
    num: '02',
    title: 'Brand & Content',
    desc: 'Story-led creative that captures the energy of sport and earns attention in the feed.',
    deliverables: ['Social campaigns', 'Digital content', 'Brand strategy'],
  },
  {
    num: '03',
    title: 'Activation & Events',
    desc: 'Live experiences that connect your brand with passionate communities, on the ground.',
    deliverables: ['Fan experiences', 'Matchday activation', 'Launches & events'],
  },
];

const tickerItems = [
  'SPONSORSHIP', 'STADIUM ADS', 'SOCIAL CONTENT', 'BRAND STRATEGY',
  'EVENT ACTIVATION', 'DIGITAL', 'MATCHDAY',
];

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
};

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="site">
      {/* NAV */}
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <img src={logo} alt="LDN Sport Social" className="nav__logo" />
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav__links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <button className="nav__cta" onClick={() => { setMenuOpen(false); setModalOpen(true); }}>
            Let's Talk
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__accent-bar" />
        <div className="hero__bg">
          <motion.img
            src={heroImage}
            alt="Sports action"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.6, ease: [0.16, 0.84, 0.3, 1] }}
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="hero__eyebrow-rule" />
            London's Sports Marketing Agency
          </motion.p>
          <motion.h1
            className="hero__headline"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Where Brands<br /><span className="hero__accent">Meet the Game</span>
          </motion.h1>
          <motion.p
            className="hero__subline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            We put ambitious brands where the fans are — pitchside, on-screen and across
            the feed. Sponsorship, content and activation that actually moves people.
          </motion.p>
          <motion.div
            className="hero__btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="btn btn--primary" onClick={() => setModalOpen(true)}>Start a Project</button>
            <a href="#work" className="btn btn--ghost">See the Work</a>
          </motion.div>
        </div>
        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </motion.div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker__item">
              {item} <span className="ticker__sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* SELECTED WORK */}
      <section className="work" id="work">
        <div className="container">
          <div className="work__header">
            <div>
              <motion.p className="eyebrow" {...fadeUp}>Selected Work</motion.p>
              <motion.h2
                className="work__title"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              >
                Campaigns that<br />made noise
              </motion.h2>
            </div>
            <motion.p
              className="work__helper"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            >
              A selection of campaigns where we put brands at the centre of sport and culture.
            </motion.p>
          </div>
          <div className="work__grid">
            {workItems.map((item, i) => (
              <motion.a
                key={item.title}
                href="#contact"
                className="work-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="work-card__img-wrap">
                  <img src={item.img} alt={item.title} />
                  <div className="work-card__img-grad" />
                  <span className="work-card__tag">{item.tag}</span>
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">{item.title}</h3>
                  <p className="work-card__desc">{item.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — 3 PILLARS */}
      <section className="services" id="services">
        <div className="container">
          <motion.div className="section-header" {...fadeUp}>
            <p className="eyebrow">What We Do</p>
            <h2>Built for the<br /><span className="accent">sports world</span></h2>
          </motion.div>
          <div className="pillars__grid">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                className="pillar"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <span className="pillar__num">{p.num}</span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__desc">{p.desc}</p>
                <ul className="pillar__deliverables">
                  {p.deliverables.map((d) => (
                    <li key={d}>
                      <span className="pillar__diamond" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about__watermark" aria-hidden="true">LDN</div>
        <div className="container about__inner">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow about__eyebrow">Who We Are</p>
            <h2>
              We put brands at the{' '}
              <span className="about__accent">centre of sport</span>
            </h2>
            <p className="about__body">
              LDN Sport Social is a London-based sports marketing agency connecting
              ambitious brands with passionate fans. From stadium pitchsides to
              viral social campaigns, we create moments that matter.
            </p>
            <p className="about__body">
              We don't just buy space. We earn attention.
            </p>
          </motion.div>
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={aboutImage} alt="LDN Sport Social — matchday" className="about__image" />
            <div className="about__badge">
              <span className="about__badge-year">EST. 2022</span>
              <span className="about__badge-location">London, UK</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLIENT / PARTNER LOGO WALL */}
      <section className="logos">
        <div className="container">
          <motion.p className="logos__caption" {...fadeUp}>
            Brands &amp; partners we've worked with
          </motion.p>
          <div className="logos__grid">
            {partners.map((p, i) => (
              <div key={i} className="logos__cell">
                <img src={p.src} alt={p.alt} className={p.invert ? 'logo--inverted' : ''} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container cta__inner">
          <motion.p className="cta__eyebrow" {...fadeUp}>Get In Touch</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Ready to elevate<br />your brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Let's build something that moves people.
          </motion.p>
          <motion.button
            onClick={() => setModalOpen(true)}
            className="btn btn--dark"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src={logo} alt="LDN Sport Social" />
            <p>We put brands where the fans are. Your partner in sports sponsorship, content and activation.</p>
          </div>
          <div className="footer__links">
            <h4>Navigation</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="/LDNSportSocialTermsAndConditions.pdf" target="_blank" rel="noopener noreferrer">
                Terms &amp; Conditions
              </a>
            </nav>
          </div>
          <div className="footer__social">
            <h4>Follow Us</h4>
            <div className="footer__social-icons">
              <a href="https://twitter.com/ldnsportsocial" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="https://www.facebook.com/profile.php?id=100088593576706" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/ldn.sport.social/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@ldnsportsocial" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
              <a href="https://www.linkedin.com/company/ldn-sport-social/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <div className="footer__company">
            <p>LDN Sport Social Limited · Unit 1, Kennet House, 8 Enterprise Way, London SW18 1GF UK</p>
            <p>Company Reg No: 14487021 · VAT Reg No: 430084532</p>
          </div>
          <p>©2022 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
