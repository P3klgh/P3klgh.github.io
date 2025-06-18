'use client';

import { useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function Home() {
  useEffect(() => {
    // Initialize AOS animations
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 1000,
        once: true,
      });
    }

    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    const navOverlay = document.querySelector('.nav-overlay') as HTMLElement;

    if (menuToggle && navOverlay) {
      menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
          navOverlay.classList.add('active');
        } else {
          navOverlay.classList.remove('active');
        }
      });

      // Close menu when clicking on nav links
      const navLinks = navOverlay.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          menuToggle.checked = false;
          navOverlay.classList.remove('active');
        });
      });
    }
  }, []);

  return (
    <>
      {/* Navigation Overlay */}
      <div className="nav nav-overlay">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item mb-2 active-nav"><a href="#">Home</a></li>
            <li className="nav__list-item mb-2"><a href="#about">About</a></li>
            <li className="nav__list-item mb-2"><a href="#portfolio">Portfolio</a></li>
            <li className="nav__list-item mb-2"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Header */}
      <header id="header">
        <div className="header-wrap" data-aos="fade">
          <div className="main-logo">
            <a href="#"><img src="/images/logo.png" alt="P3klgh Portfolio" /></a>
          </div>
          <nav id="navbar">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
              <span></span>
            </label>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="billboard" className="jarallax bg-secondary">
        <div className="container-lg">
          <div className="row align-items-end">
            <div className="col-lg-6" data-aos="zoom-in-up">
              <div className="banner-content">
                <div className="banner-header">
                  <h2 className="display-1">Kenneth Lee<br />Full Stack Developer</h2>
                  <p className="fs-5">
                    I am a dedicated full-stack developer with a robust background in computer science and mechatronics engineering. My expertise spans programming languages like C#, C++, Python, JavaScript, and TypeScript, alongside modern technologies such as React, Node.js, PostgreSQL, and DevOps tools including Docker and AWS. Through projects like Project Gamma and a low-latency Minecraft AWS server, I've honed my ability to deliver scalable, secure solutions. My leadership in the WorldSkills Singapore robotics team, where I engineered advanced motor control and computer vision systems, reflects my passion for innovation and problem-solving. With strong teamwork and communication skills forged through national service and extracurriculars, combined with a solid academic foundation at Queensland University of Technology, I am eager to drive impact in technology-driven teams.
                  </p>
                  <a href="#contact" className="btn btn-primary btn-large">Get in touch</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in-up">
              <img src="/images/banner-pic.png" alt="P3klgh" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="padding-large">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <div className="info-box" data-aos="zoom-in-up" data-aos-delay="300">
                <div className="icon"><Icon icon="la:edit" /></div>
                <h3>Full-Stack Development</h3>
                <p>
                  Building robust, scalable web applications using React, Node.js, TypeScript, and PostgreSQL, with a focus on modular architecture, security, and performance optimization.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <div className="info-box" data-aos="zoom-in-up" data-aos-delay="600">
                <div className="icon"><Icon icon="la:gitter" /></div>
                <h3>DevOps & Cloud</h3>
                <p>
                  Streamlining development workflows with Docker, AWS, and CI/CD pipelines via GitHub Actions, ensuring consistent, efficient, and reliable deployments.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <div className="info-box" data-aos="zoom-in-up" data-aos-delay="900">
                <div className="icon"><Icon icon="la:jira" /></div>
                <h3>Robotics & IoT</h3>
                <p>
                  Designing and programming embedded systems with Raspberry Pi and Arduino, integrating computer vision and sensor technologies for real-time applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievement" className="padding-large pt-0">
        <div className="container-lg">
          <div className="row">
            <div className="section-header align-center mb-5">
              <span className="text-primary">Awards and Recognition</span>
              <h2 className="display-5 m-0">Achievement</h2>
            </div>
          </div>
        </div>

        <div className="container-lg">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4" data-aos="zoom-in-up" data-aos-delay="400">
                <div className="card-body">
                  <span className="card-subtitle mb-2 text-primary">2023-Present</span>
                  <h4 className="card-title text-capitalize">Academic Excellence</h4>
                  <p className="card-text">Maintained a GPA of 6.25 in the Bachelor of Computer Science at Queensland University of Technology, demonstrating strong performance in programming and algorithms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4" data-aos="zoom-in-up" data-aos-delay="0">
                <div className="card-body">
                  <span className="card-subtitle mb-2 text-primary">2016</span>
                  <h4 className="card-title text-capitalize">WorldSkills Singapore Robotics Lead</h4>
                  <p className="card-text">Led the inaugural robotics team at ITE West to a successful debut in WorldSkills Singapore, showcasing advanced motor control and computer vision systems.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4" data-aos="zoom-in-up" data-aos-delay="200">
                <div className="card-body">
                  <span className="card-subtitle mb-2 text-primary">2015-2017</span>
                  <h4 className="card-title text-capitalize">Director's List</h4>
                  <p className="card-text">Recognized in the top 10% of the Higher Nitec Certification cohort at the Institute of Technical Education for outstanding academic and technical performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="overflow-hidden padding-large">
        <div className="container-lg" data-aos="zoom-in-up" data-aos-delay="300">
          <div className="row">
            <div className="col-md-8">
              <div className="section-header d-flex flex-wrap justify-content-center justify-content-md-start align-items-center mb-2 mb-md-5">
                <h2 className="display-5 m-0">Recent Projects</h2>
                <a href="#portfolio" className="btn-link ms-0 ms-md-5 text-dark text-decoration-none">View all Projects</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-carousel swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <figure className="portfolio-item">
                      <a href="#"><img src="/images/portfolio-large-6.jpg" className="portfolio-image" alt="Project 1" /></a>
                      <figcaption className="portfolio-title my-3">
                        <span className="text-primary text-uppercase fs-6">Web Development</span>
                        <h3 className="fs-4 fw-bold">E-commerce Platform</h3>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="portfolio-item">
                      <a href="#"><img src="/images/portfolio-large-7.jpg" className="portfolio-image" alt="Project 2" /></a>
                      <figcaption className="portfolio-title my-3">
                        <span className="text-primary text-uppercase fs-6">Mobile App</span>
                        <h3 className="fs-4 fw-bold">Task Management App</h3>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="portfolio-item">
                      <a href="#"><img src="/images/portfolio-large-8.jpg" className="portfolio-image" alt="Project 3" /></a>
                      <figcaption className="portfolio-title my-3">
                        <span className="text-primary text-uppercase fs-6">Web Design</span>
                        <h3 className="fs-4 fw-bold">Corporate Website</h3>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="padding-large bg-grey">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center mb-5">
                <span className="text-primary">Get In Touch</span>
                <h2 className="display-5 m-0">Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="contact-info text-center">
                <p className="mb-4">I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>
                <div className="d-flex justify-content-center gap-4">
                  <a href="mailto:your.email@example.com" className="btn btn-primary">Email Me</a>
                  <a href="https://github.com/P3klgh" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="m-0">&copy; 2025 P3klgh. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
