import React, { useState } from "react";
import "./Homepage.css";
// import Carousel from 'react-bootstrap/Carousel';
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { Img } from "@chakra-ui/react";
import axios from "axios";



const Home = () => {

  const [data, setdata] = useState()

  
let newdata = data?.filter(obj => obj?.target === 'men');

  const add =  async () => {
    let res = await axios("http://localhost:8080/products")

    setdata(res.data)
  }

  // add()

  console.log(data)

  const breakpoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 550,
      itemsToShow: 1,
    },
    {
      width: 760,
      itemsToShow: 2,
    },
    {
      width: 1100,
      itemsToShow: 3,
    },
  ];


  return (
    <div className="Main">

      <div style={{ marginTop: "15px" }}>
        <Carousel
          breakPoints={breakpoints}
          enableAutoPlay={true}
          enableTilt={true}
          autoPlaySpeed={2000}
          enableMouseSwipe
          enableSwipe={true}
          showArrows={false}
        >
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg"
              alt="bewakoof"
              height={"450px"}
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg"
              alt="bewakoof"
              height={"450px"}
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg"
              alt="bewakoof"
              height={"450px"}
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
          <Item>
            <Img
              className="carouselsm"
              src="https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg"
              height={"450px"}
              alt="bewakoof"
            />
          </Item>
        </Carousel>
      </div>

      <button onClick={add}>add</button>

      {
        data?.map((el, index) => {
          return <img key={index} src={el.image} alt="" />
        })
      }

   
    </div>
  );
};

export default Home;