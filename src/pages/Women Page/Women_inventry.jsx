import { Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Women_inventry({men_data}) {

    const handle_See_More_Details = () => {
        localStorage.setItem("women_single_product_Id", men_data?._id)
    }

  return (
    <div >
      
      <img src={men_data?.image} alt="" />
      <p> <b> Brand - </b>  {men_data?.brand}</p>
      <p> <b> Rating - </b>  {men_data?.ratings}</p>
      <p> <b> Category - </b>  {men_data?.category}</p>
      <p> <b> Description - </b>  {men_data?.desc}</p>
      <p> <b> Price - </b>  &#8377; {men_data?.price}</p>
      <NavLink to="/womenSinglePage">
      <Button onClick={handle_See_More_Details}>See more details</Button>
              </NavLink>
    </div>
  )
}

export default Women_inventry
