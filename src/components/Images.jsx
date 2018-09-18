import React, { Component } from "react";
import Image from "./Image";

class Images extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.score > prevProps.score) {
    }
  }
  render() {
    const { images, onImageClick, show, score } = this.props;
    const imageContainerClasses = ["image-container-card"];
    const imageCardClasses = ["image-card"];
    if (show) {
      imageContainerClasses.push("show");
      imageCardClasses.push("show");
    }
    return (
      <div className="image-container">
        <div className={imageContainerClasses.join(" ")}>
          {images.map(image => (
            <div className={imageCardClasses.join(" ")}>
              <Image
                key={image.id}
                onImageClick={onImageClick}
                show={show}
                score={score}
                image={image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Images;
