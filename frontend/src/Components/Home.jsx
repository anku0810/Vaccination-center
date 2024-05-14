import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import Footer from './footer.jsx';
import dose from './Images/fight-the-virus-e1636713326488 (1).svg';
import AboutSection from './AboutSection.jsx';
import FaqSection from './FaqSection.jsx';
import ContactSection from './Contact.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Historic &amp; Achievement! <br /> India’s Glorious Journey of{' '}
                    <strong className="brand-name">200+ Crore Vaccinations</strong>
                  </h1>
                  <h3 className="my-3">
                    "Amidst the challenges of COVID-19, let's unite with compassion, adapt with resilience, and emerge
                    stronger together. In the face of adversity, our collective strength shines brightest."
                  </h3>
                  <div className="mt-3">
                    <Link to="/slot" className="btn-get-started">
                      Book Your Slot
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={dose} className="img" alt="home-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <br />
      <br />
      <FaqSection />
      <br />
      <br />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
