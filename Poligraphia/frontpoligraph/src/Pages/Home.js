import React, { Component } from "react";
import { Container, Card, Row, Button } from "react-bootstrap";
import CarouselBox from "../components/CarouselBox";
import el1 from "../assets/e1.jpg";
import el2 from "../assets/e2.jpg";
import el3 from "../assets/e3.jpg";
import el4 from "../assets/e4.jpg";
import el5 from "../assets/e5.jpg";
import el6 from "../assets/e6.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />

        <h2 className="text-center m4">Our works</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-3">
              <div class="card">
                <img src={el1} class="card-img-top" alt="Electronik" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More about this
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" >
                <img src={el2} class="card-img-top" alt="Electronik" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More about this
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" >
                <img src={el3} class="card-img-top" alt="Electronik" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More about this
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" >
                <img src={el4} class="card-img-top" alt="Electronik" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More about this
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" >
                <img src={el5} class="card-img-top" alt="Electronik" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More about this
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div class="card" >
                <img src={el6} class="card-img-top" alt="Electronik" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <a href="#" className="btn btn-primary">
                    More about this
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
