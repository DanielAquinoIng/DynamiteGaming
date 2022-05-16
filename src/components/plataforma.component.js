import React, { Component } from "react";
import nintendo from "../assets/nintendo.jpeg";
import playstation from "../assets/playstation.jpeg";
import steam from "../assets/steam.jpeg";
import xgod from "../assets/xgod.jpeg";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
} from "reactstrap";

// className="img-fluid"
// src={nintendo}
// alt="Nintendo"
// style={{borderRadius: 25}}
// width={"320px"}
// height={"180px"}

{
  /* <Link
type="submit"
to="../sign-in"
style={{ margin: 10, cursor: "pointer", boxShadow: "4px 14px 80px black", borderRadius: 25}}
className="zoom"
// onMouseEnter={{fontSize:"150%"}}
>
<img
  className="img-fluid"
  src={nintendo}
  alt="Nintendo"
  style={{borderRadius: 25}}
// width={"320px"}
// height={"180px"}
/>
</Link> */
}

// .boximg{
//   display: flex;
//   flex-direction: row;
//   margin: 0px;
//   padding: 0px;
//   background-color: pink;
//   border-radius: 50px;
//   border-width: 0px;
//   box-shadow: 10px 20px 15px 3px rgba(0, 0, 0, 0.397);
// }

export default class Plataform extends Component {
  render() {
    return (
      <Carousel
        activeIndex={0}
        next={function noRefCheck() {}}
        previous={function noRefCheck() {}}
      >
        <CarouselIndicators
          activeIndex={0}
          items={[
            {
              altText: "Slide 1",
              caption: "Slide 1",
              key: 1,
              src: "https://picsum.photos/id/123/1200/600",
            },
            {
              altText: "Slide 2",
              caption: "Slide 2",
              key: 2,
              src: "https://picsum.photos/id/456/1200/600",
            },
            {
              altText: "Slide 3",
              caption: "Slide 3",
              key: 3,
              src: "https://picsum.photos/id/678/1200/600",
            },
          ]}
          onClickHandler={function noRefCheck() {}}
        />
        <CarouselItem
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
        >
          <img alt="Slide 1" src="https://picsum.photos/id/123/1200/600" />
          <CarouselCaption captionHeader="Slide 1" captionText="Slide 1" />
        </CarouselItem>
        <CarouselItem
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
        >
          <img alt="Slide 2" src="https://picsum.photos/id/456/1200/600" />
          <CarouselCaption captionHeader="Slide 2" captionText="Slide 2" />
        </CarouselItem>
        <CarouselItem
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
        >
          <img alt="Slide 3" src="https://picsum.photos/id/678/1200/600" />
          <CarouselCaption captionHeader="Slide 3" captionText="Slide 3" />
        </CarouselItem>
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={function noRefCheck() {}}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={function noRefCheck() {}}
        />
      </Carousel>
      // <div className="i1">
      //   <Link
      //     type="submit"
      //     to="../sign-in"
      //     className="zoom"
      //     // onMouseEnter={{ fontSize: "150%" }}
      //   >
      //     <img src={nintendo} />
      //   </Link>
      //   <Link
      //     type="submit"
      //     to="../sign-in"
      //     className="zoom"
      //     onMouseEnter={{ fontSize: "150%" }}
      //   >
      //     <img src={xgod} className="i2" />
      //   </Link>
      //   <Link
      //     type="submit"
      //     to="../sign-in"
      //     className="zoom"
      //     onMouseEnter={{ fontSize: "150%" }}
      //   >
      //     <img src={playstation} />
      //   </Link>
      //   <Link
      //     type="submit"
      //     to="../sign-in"
      //     className="zoom"
      //     onMouseEnter={{ fontSize: "150%" }}
      //   >
      //     <img src={steam} />
      //   </Link>
      // </div>
    );
  }
}
