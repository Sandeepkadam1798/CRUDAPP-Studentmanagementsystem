import React, { Component } from "react";
import Tour from "./Tour";
import { tourData } from "./tourData";
export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const filteredTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: filteredTours
    });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour
              key={tour.id}
              img={tour.img}
              city={tour.city}
              name={tour.name}
              info={tour.info}
              removeTour={() => {
                this.removeTour(tour.id);
              }}
              showInfo={this.showInfo}
            />
          );
        })}
      </section>
    );
  }
}
