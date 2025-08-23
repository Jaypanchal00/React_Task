import React from 'react';

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#top">TechNova</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Who We Are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">What We Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Reach Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="text-white text-center d-flex align-items-center justify-content-center" style={{ height: "100vh", background: "linear-gradient(to right, #667eea, #764ba2)" }}>
        <div>
          <h1 className="display-3 fw-bold">Innovate. Build. Inspire.</h1>
          <p className="lead mt-3">We craft intelligent solutions for tomorrow’s world.</p>
          <button className="btn btn-outline-light btn-lg mt-4">Explore Our Vision</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold">Who We Are</h2>
          <p className="mt-3 text-muted">
            TechNova is a passionate team of engineers and creators dedicated to pushing the boundaries of technology. From startups to enterprises, we deliver impactful solutions with purpose and clarity.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What We Do</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-brain fa-3x text-success mb-3"></i>
                  <h5 className="card-title">AI Solutions</h5>
                  <p className="card-text">Empowering businesses with smart automation and decision-making tools.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-code fa-3x text-success mb-3"></i>
                  <h5 className="card-title">Custom Development</h5>
                  <p className="card-text">From web apps to APIs, we design and build scalable systems tailored for your goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="fas fa-users fa-3x text-success mb-3"></i>
                  <h5 className="card-title">Team Extension</h5>
                  <p className="card-text">Need developers fast? We extend your engineering team with top talent.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Reach Out</h2>
          <form className="mx-auto bg-white p-4 shadow rounded" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Full Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Work Email Address" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Let's Connect</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; {new Date().getFullYear()} TechNova. Innovating with Purpose.</p>
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
