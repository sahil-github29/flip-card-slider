import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Icon } from "antd";
import Card from "./Card";

class Slider extends Component {
  state = {
    counter: 1,
    cardLength: 0
  };

  cardWidth = 250;

  constructor(props) {
    super(props);
    this.cardSliderRef = React.createRef();
  }
  componentDidMount() {
    this.setState({ cardLength: this.cardSliderRef.current.childNodes.length });
  }
  translate(counter) {
    let { cardSliderRef, cardWidth } = this;
    cardSliderRef.current.style.transition = "transform 0.4s ease-in-out";
    cardSliderRef.current.style.transform = `translateX(${-counter *
      cardWidth}px`;
  }
  next = () => {
    let { counter, cardLength } = this.state;
    console.log(counter, cardLength);
    if (counter < cardLength - 1) {
      counter = counter + 1;
      this.translate(counter);
      this.setState({ counter });
    }
  };
  prev = () => {
    let { counter } = this.state;
    console.log(counter);
    if (counter > 1) {
      counter = counter - 1;
      this.translate(counter);
      this.setState({ counter });
    }
  };
  render() {
    return (
      <Row className="align-items-center justify-content-center mx-0">
        <Icon type="left" className="mr-3" onClick={() => this.prev()} />
        <div className="col-sm-10 d-flex px-0 align-items-center justify-content-center overflow-hidden">
          <div
            style={{ border: "3px solid red" }}
            className="d-flex px-0 align-items-center justify-content-start cardWidth"
          >
            <div
              ref={this.cardSliderRef}
              className="d-flex px-0 align-items-center justify-content-start cardWidth cardSlider"
            >
              <div className="align-self-stretch">
                <Card className="cardWidth" card="1" />
              </div>
              <div className="align-self-stretch">
                <Card className="cardWidth" card="2" />
              </div>
              <div className="align-self-stretch">
                <Card className="cardWidth" card="3" />
              </div>
              <div className="align-self-stretch">
                <Card className="cardWidth" card="4" />
              </div>
              <div className="align-self-stretch">
                <Card className="cardWidth" card="5" />
              </div>
            </div>
          </div>
        </div>
        <Icon type="right" className="ml-3" onClick={() => this.next()} />
      </Row>
    );
  }
}
export default Slider;
