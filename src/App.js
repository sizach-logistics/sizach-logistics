import React from "react";
import './index.css';
import truck1 from './assets/truck1.jpeg';
import truck2 from './assets/truck2.jpeg';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sizach Logistics</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Concrete Mixer Solutions. Solid Deliveries.</h2>
        <p>Reliable logistics for ready-mix concrete and more — on time, every time.</p>
      </section>

      <section id="about">
        <h3>About Us</h3>
        <p>
          Sizach Logistics is a South African-based logistics company specializing in ready-mix concrete delivery.
          Founded in 2023 and based in Bedfordview, Germiston, our mission is to provide reliable, efficient, and
          professional transport solutions tailored to the needs of the construction industry.
        </p>
      </section>

      <section id="services">
        <h3>Our Services</h3>
        <ul>
          <li>Ready-mix concrete delivery</li>
          <li>General logistics and freight transport</li>
          <li>Custom delivery solutions for construction projects</li>
          <li>Route-optimized transport for time-sensitive materials</li>
        </ul>
      </section>

      <section id="gallery">
        <h3>Our Fleet</h3>
        <img src={truck1} alt="Truck 1" />
        <img src={truck2} alt="Truck 2" />
      </section>

      <section id="contact">
        <h3>Contact Us</h3>
        <p><strong>Phone:</strong> 079 555 5818</p>
        <p><strong>Email:</strong> sizach.logistics@gmail.com</p>
        <p><strong>Address:</strong> 6 Marais Rd, Bedfordview, Germiston, 2008</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Sizach Logistics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
