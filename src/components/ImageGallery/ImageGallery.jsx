import React, { Component, Fragment } from "react";
import "./ImageGallery.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class ImageGallery extends Component {
  images = [1, 2, 3, 4, 5, 6, 7];

  render() {
    return (
      <div>
        <Carousel centered infinite keepDirectionWhenDragging arrows>
          {this.images.map((imageValue) => {
            return (
              <Fragment>
                <img
                  alt="background"
                  className="image-gallery"
                  src={require(`../../assets/images/screenshot${imageValue}.png`)}
                />
              </Fragment>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default ImageGallery;
