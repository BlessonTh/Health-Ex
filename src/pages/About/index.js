import React from "react";
import "./style.scss";
import NavbarCompoent from "../../components/User/Navbar/index";
import FooterCompoent from "../../components/User/Footer/index";

const Index = () => {
  return (
    <div className="about">
      <NavbarCompoent />
      {/* Header Banner */}
      <div className="header py-4 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 content text-center">
              <h1 className="display-4 font-weight-bold text-primary">
                Health<span className="text-secondary">Adda</span>
              </h1>
              <p className="lead">
                Our online platform is designed to help you easily find and book appointments with trusted doctors in your area. With just a few clicks, you can browse through a list of available doctors, see their credentials and specialties, and choose a convenient time for your appointment. Whether you need a routine check-up or specialized care, our platform makes it simple and hassle-free to connect with the right healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-lg-4 mb-5">
              <i className="bi bi-geo-alt h1 text-primary mb-3"></i>
              <h3>Location</h3>
              <p className="lead">Vit Bhopal University</p>
              <p className="lead">Sehore, Bhopal</p>
              <p className="lead">Mp, India</p>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <i className="bi bi-calendar-event h1 text-primary mb-3"></i>
              <h3>Availability</h3>
              <p className="lead">24/7 available</p>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <i className="bi bi-people h1 text-primary mb-3"></i>
              <h3>Pricing</h3>
              <p className="lead">Contact for Pricing</p>
            </div>
          </div>
        </div>
      </div>
      <FooterCompoent />
    </div>
  );
};

export default Index;
