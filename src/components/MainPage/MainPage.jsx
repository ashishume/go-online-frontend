import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import AboutUs from "../AboutUs/AboutUs";
import ImageGallery from "../ImageGallery/ImageGallery";
class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="pusher">
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
              <div className="header-contact">
                <Link to="/login">
                  <button className="ui primary inverted large button">
                    Login
                  </button>
                </Link>
              </div>

              {/* <div className="ui large secondary inverted pointing menu">
                <a className="toc item">
                  <i className="sidebar icon"></i>
                </a>
                <a className="active item">Home</a>
                <a className="item">Work</a>
                <a className="item">Company</a>
                <a className="item">Careers</a>
                <div className="right item">
                  <a className="ui inverted button">Log in</a>
                  <a className="ui inverted button">Sign Up</a>
                </div>
              </div> */}
            </div>

            <div className="ui text container">
              <h1 className="ui inverted huge header">Digital Education</h1>
              <h2>Go ahead and find out what's inside</h2>
              <Link to="/contact-us" className="link">
                <button className="ui huge primary button">
                  Book a Demo<i className="right arrow icon"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="ui grid container">
            <div className="row" id="stack">
              <div className="column">
                <h1 className="header">Why we are better than others</h1>
              </div>
            </div>
            <div className="row">
              <div className="ui stackable three column grid">
                <div className="column">
                  <img
                    alt="webinar"
                    src={require("../../assets/webinar.png")}
                    className="icon-header"
                  />
                  <h2 className="sub-header">
                    Online conferencing and webinars
                  </h2>
                </div>
                <div className="column">
                  <img
                    alt="gear"
                    src={require("../../assets/gear.png")}
                    className="icon-header"
                  />
                  <h2 className="sub-header">
                    Highly customisable with admin support
                  </h2>
                </div>
                <div className="column">
                  <img
                    alt="tick"
                    src={require("../../assets/tick.png")}
                    className="icon-header"
                  />
                  <h2 className="sub-header">
                    Easy to use with all teaching features
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                {/* <div className="center aligned column">
                </div> */}
              </div>
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">
                    We Help Schools and Institutions
                  </h3>
                  <p>
                    We can give your organization a better way to teach and
                    showcase lectures. Let us delight your students and empower
                    your needs.
                  </p>
                  {/* <p>
                    <img src={require("../../assets/logo.png")} />
                  </p> */}
                  {/* <h3 className="ui header">We Make Bananas That Can Dance</h3>
                  <p>
                    Yes that's right, you thought it was the stuff of dreams,
                    but even bananas can be bioengineered.
                  </p> */}
                </div>
                <div className="six wide right floated column">
                  <img
                    rel="noopener noreferrer"
                    alt="background"
                    src={require("../../assets/webinar.png")}
                    className="ui large bordered rounded image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui text container">
              <h3 className="ui header">What we do?</h3>
              <p>We provide online webinars and lectures services</p>
              {/* <a className="ui large teal button">Read More</a> */}
              <AboutUs />
            </div>
          </div>
          <div className="ui vertical stripe segment">
            <div className="ui text container">
              <h3 className="ui header" style={{ textAlign: "center" }}>
                Screenshots
              </h3>

              <ImageGallery />
            </div>
          </div>

          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row"></div>
              <div className="center aligned row">
                <div className="column">
                  <h1 className="intro">What we are?</h1>
                  <br />
                  <iframe
                    title="video"
                    width="751"
                    height="421"
                    src="https://www.youtube.com/embed/d0WLaK_CMTQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* <h3>"What a Company"</h3> */}
                  {/* <p>That is what they all say about us</p> */}
                </div>
                {/* <div className="column">
                  <h3>"I shouldn't have gone with their competitor."</h3>
                </div> */}
              </div>
            </div>
          </div>

          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  {/* <h4 className="ui inverted header">About</h4> */}
                  <div className="ui inverted link list">
                    <h4 className="ui inverted header">
                      <img alt="logo" src={require("../../assets/logo.png")} />
                      Digital Education
                    </h4>
                    <span>
                      <br />A <strong>NineMiles</strong> Initiative
                      <br />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://instagram.com/digiedulive"
                      >
                        <i className="icon instagram"></i>
                        <strong>Instagram</strong>
                      </a>
                      <br />
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/digiedu.live/"
                      >
                        <i className="icon facebook"></i>{" "}
                        <strong>Facebook</strong>
                      </a>
                    </span>
                  </div>
                </div>
                {/* <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div className="ui inverted link list">
                    <a href="#" className="item">
                      Banana Pre-Order
                    </a>
                    <a href="#" className="item">
                      DNA FAQ
                    </a>
                    <a href="#" className="item">
                      How To Access
                    </a>
                    <a href="#" className="item">
                      Favorite X-Men
                    </a>
                  </div>
                </div> */}
                {/* <div className="ui container">
                  <div className="row">
                    <h4 className="ui inverted header">
                      <img src={require("../../assets/logo.png")} />
                      Digital Education
                    </h4>
                    <span>
                      <br />A <strong>NineMiles</strong> Initiative
                      <br />
                      <a
                        target="_blank"
                        href="https://instagram.com/digiedulive"
                      >
                        <i className="icon instagram"></i>
                        <strong>Instagram</strong>
                      </a>
                      <br />
                      <a
                        target="_blank"
                        href="https://www.facebook.com/digiedu.live/"
                      >
                        <i className="icon facebook"></i>{" "}
                        <strong>Facebook</strong>
                      </a>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
