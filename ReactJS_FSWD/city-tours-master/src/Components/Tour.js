import React, { Component } from "react";

class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { city, img, name, info, removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={removeTour}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name} </h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
