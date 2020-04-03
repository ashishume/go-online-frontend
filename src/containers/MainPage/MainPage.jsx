import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import Footer from "../../components/Footer/Footer";
class MainPage extends Component {
  render() {
    return (
      <div>
        <div class="pusher">
          <div class="ui inverted vertical masthead center aligned segment">
            <div class="ui container">
              {/* <div class="ui large secondary inverted pointing menu">
                <a class="toc item">
                <i class="sidebar icon"></i>
                </a>
                <a class="active item">Home</a>
                <a class="item">Work</a>
                <a class="item">Company</a>
                <a class="item">Careers</a>
                <div class="right item">
                <a class="ui inverted button">Log in</a>
                <a class="ui inverted button">Sign Up</a>
                </div>
              </div> */}
            </div>

            <div class="ui text container">
              <h1 class="ui inverted header">HelixLive</h1>
              <h2>Go ahead and find out what's inside</h2>
              <div class="ui huge primary button">
                <Link to="/login" className="link">
                  Get Started <i class="right arrow icon"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="ui vertical stripe segment">
            <div class="ui middle aligned stackable grid container">
              <div class="row">
                <div class="eight wide column">
                  <h3 class="ui header">We Help Companies and Companions</h3>
                  <p>
                    We can give your company a better way to teach and showcase
                    lectures. Let us delight your customers and empower your
                    needs...through pure data analytics.
                  </p>
                  {/* <h3 class="ui header">We Make Bananas That Can Dance</h3>
                  <p>
                    Yes that's right, you thought it was the stuff of dreams,
                    but even bananas can be bioengineered.
                  </p> */}
                </div>
                <div class="six wide right floated column">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/uniprojex.appspot.com/o/webinar.png?alt=media&token=1e385b21-d252-4168-bdca-4cdad2b4fd54"
                    class="ui large bordered rounded image"
                  />
                </div>
              </div>
              <div class="row">
                {/* <div class="center aligned column">
                  <a class="ui huge button">Check Them Out</a>
                </div> */}
              </div>
            </div>
          </div>

          <div class="ui vertical stripe quote segment">
            <div class="ui equal width stackable internally celled grid">
              <div class="center aligned row">
                <div class="column">
                  <h3>"What a Company"</h3>
                  {/* <p>That is what they all say about us</p> */}
                </div>
                <div class="column">
                  <h3>"I shouldn't have gone with their competitor."</h3>
                </div>
              </div>
            </div>
          </div>

          <div class="ui vertical stripe segment">
            <div class="ui text container">
              <h3 class="ui header">What we do?</h3>
              <p>We provide online webinars and lectures via our portal</p>
              <a class="ui large button">Read More</a>
              {/* <h4 class="ui horizontal header divider">
                <a href="#">Case Studies</a>
              </h4> */}
              {/* <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
              <p>
                Yes I know you probably disregarded the earlier boasts as
                non-sequitur filler content, but its really true. It took years
                of gene splicing and combinatory DNA research, but our bananas
                can really dance.
              </p> */}
              {/* <a class="ui large button">I'm Still Quite Interested</a> */}
            </div>
          </div>

          <div class="ui inverted vertical footer segment">
            <div class="ui container">
              <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                  {/* <h4 class="ui inverted header">About</h4> */}
                  {/* <div class="ui inverted link list">
                    <a href="#" class="item">
                      Sitemap
                    </a>
                    <a href="#" class="item">
                      Contact Us
                    </a>
                    <a href="#" class="item">
                      Religious Ceremonies
                    </a>
                    <a href="#" class="item">
                      Gazebo Plans
                    </a>
                  </div> */}
                </div>
                {/* <div class="three wide column">
                  <h4 class="ui inverted header">Services</h4>
                  <div class="ui inverted link list">
                    <a href="#" class="item">
                      Banana Pre-Order
                    </a>
                    <a href="#" class="item">
                      DNA FAQ
                    </a>
                    <a href="#" class="item">
                      How To Access
                    </a>
                    <a href="#" class="item">
                      Favorite X-Men
                    </a>
                  </div>
                </div> */}
                <div class="seven wide column">
                  <h4 class="ui inverted header">HelixLive</h4>
                  <p>
                    Created by{" "}
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/ashishume/"
                      target="_blank"
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
