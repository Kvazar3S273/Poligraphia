import React, { Component } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-2 mt-3">
                  <img
                    width={100}
                    height={100}
                    className="mr-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png"
                  />
                </div>
                <div className="col-md-9 mt-3">
                  <div>
                    <h5>All about Photoshop</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary float-end"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 mt-3">
                  <img
                    width={100}
                    height={100}
                    className="mr-3"
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032014/corel_draw_x7_0.png?itok=_3uMoZH5"
                  />
                </div>
                <div className="col-md-9 mt-3">
                  <div>
                    <h5>All about CorelDraw</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary float-end"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 mt-3">
                  <img
                    width={100}
                    height={100}
                    className="mr-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/512px-Visual_Studio_Icon_2019.svg.png"
                  />
                </div>
                <div className="col-md-9 mt-3">
                  <div>
                    <h5>All about Visual Studio</h5>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary float-end"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <h4 className="text-center">Categories</h4>
              <ul className="list-group mt-3">
                <li class="list-group-item" id="cat1" style={{ cursor: "pointer" }}>Html/CSS</li>
                <li class="list-group-item" id="cat2" style={{ cursor: "pointer" }}>Javascript</li>
                <li class="list-group-item" id="cat3" style={{ cursor: "pointer" }}>PHP</li>
                <li class="list-group-item" id="cat4" style={{ cursor: "pointer" }}>C#</li>
                <li class="list-group-item" id="cat5" style={{ cursor: "pointer" }}>C++</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
