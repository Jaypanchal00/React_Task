import React from 'react';

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#top">MyWebsite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div> 
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="bg-primary text-white text-center py-5" style={{ paddingTop: "100px" }}>
        <div className="container">
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">A modern responsive homepage built with React and Bootstrap</p>
          <button className="btn btn-light btn-lg mt-3">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2>About Us</h2>
          <p className="mt-3">
            We are passionate developers building sleek and fast web applications.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="bi bi-speedometer2 display-4 text-primary"></i>
              <h4 className="mt-3">Fast</h4>
              <p>Our apps are optimized for performance and speed.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-phone display-4 text-primary"></i>
              <h4 className="mt-3">Responsive</h4>
              <p>Looks great on any device, big or small.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-shield-lock display-4 text-primary"></i>
              <h4 className="mt-3">Secure</h4>
              <p>We prioritize security in every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="mx-auto" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>

      {/* Smooth scroll CSS */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </div>
  );
}
