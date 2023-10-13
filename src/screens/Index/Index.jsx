import React from "react";
import { Mesh } from "../../components/Mesh";
import { NavbarLogoLeft } from "../../components/NavbarLogoLeft";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame">
            <Mesh className="mesh-instance" property1="default" />
          </div>
          <NavbarLogoLeft className="navbar-logo-left-instance" property1="default" />
          <div className="all-pages">
            <img
              className="hero-heading-left"
              alt="Hero heading left"
              src="https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/hero-heading-left.png"
            />
            <img
              className="gallery-overview"
              alt="Gallery overview"
              src="https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/gallery-overview.png"
            />
            <img
              className="pricing-comparison"
              alt="Pricing comparison"
              src="https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/pricing-comparison.png"
            />
            <img
              className="testimonial-column"
              alt="Testimonial column"
              src="https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/testimonial-column-dark.png"
            />
            <footer className="footer">
              <div className="columns">
                <div className="column">
                  <div className="logo-wrapper">
                    <img
                      className="logo"
                      alt="Logo"
                      src="https://cdn.animaapp.com/projects/65297fedb608fc4e716b8302/releases/65298031239222558d58524f/img/logo@2x.png"
                    />
                  </div>
                </div>
                <div className="small-columns">
                  <div className="content-wrapper">
                    <div className="content">
                      <div className="text-wrapper-2">COMPANY</div>
                      <div className="footer-links">
                        <div className="link">How it works</div>
                        <div className="link-2">Pricing</div>
                        <div className="link-2">Demo</div>
                      </div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <div className="text-wrapper-2">RESOURCES</div>
                      <div className="footer-links">
                        <p className="link">Blog post name goes here</p>
                        <p className="link-2">Blog post name goes here</p>
                        <p className="link-2">Blog post name goes here</p>
                        <div className="link-2">See all resources</div>
                      </div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <div className="text-wrapper-2">ABOUT</div>
                      <div className="footer-links">
                        <div className="link-3">Terms &amp; Conditions</div>
                        <div className="link-4">Privacy Policy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <p className="text">Copyright © 2022 Company name</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
