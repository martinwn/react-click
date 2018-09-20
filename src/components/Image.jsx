import React, { Component } from "react";

class Image extends Component {
  render() {
    const { onImageClick, show, image, score } = this.props;
    const imageClasses = ["image"];
    if (show && score === 0) {
      imageClasses.push("show");
    }
    if (score > 0) {
      imageClasses.push("make-visible");
    }
    return (
      <img
        src={image.srcImage}
        onClick={() => onImageClick(image)}
        className={imageClasses.join(" ")}
        style={this.styles}
      />
    );
  }
}

export default Image;
