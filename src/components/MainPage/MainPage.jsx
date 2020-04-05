import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import AboutUs from "../AboutUs/AboutUs";
class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="pusher">
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
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
              <h1 className="ui inverted header">Digital Education</h1>
              <h2>Go ahead and find out what's inside</h2>
              <Link to="/login" className="link">
                <button className="ui huge primary button">
                  Get Started <i className="right arrow icon"></i>
                </button>
              </Link>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">
                    We Help Companies and Companions
                  </h3>
                  <p>
                    We can give your company a better way to teach and showcase
                    lectures. Let us delight your students and empower your
                    needs.
                  </p>
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
              <div className="row">
                {/* <div className="center aligned column">
                  <a className="ui huge button">Check Them Out</a>
                </div> */}
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
          {/* <div className="ui vertical stripe segment">
            <div className="ui text container">
              <h3 className="ui header">What we do?</h3>
              <p>We provide online webinars and lectures via our portal</p>
              <a className="ui large teal button">Read More</a>
             
            </div>
          </div> */}

          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <h3>"What a Company"</h3>
                  {/* <p>That is what they all say about us</p> */}
                </div>
                <div className="column">
                  <h3>"I shouldn't have gone with their competitor."</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  {/* <h4 className="ui inverted header">About</h4> */}
                  {/* <div className="ui inverted link list">
                    <a href="#" className="item">
                      Sitemap
                    </a>
                    <a href="#" className="item">
                      Contact Us
                    </a>
                    <a href="#" className="item">
                      Religious Ceremonies
                    </a>
                    <a href="#" className="item">
                      Gazebo Plans
                    </a>
                  </div> */}
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
                <div className="seven wide column">
                  <h4 className="ui inverted header">Digital Education</h4>
                  <p>
                    Created by{" "}
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/ashishume/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>Ashish Debnath</b>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
