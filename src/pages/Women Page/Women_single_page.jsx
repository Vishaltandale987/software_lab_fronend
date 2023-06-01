import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Women_single_page() {
    let id = localStorage.getItem("women_single_product_Id")


    const [data, setdata] = useState()

  
  
    const handle_getdata =  async () => {

      try {
        
        let res = await axios(`http://localhost:8080/products/${id}`)
    
        setdata(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      handle_getdata()
    }, [data])

// console.log(data)
  return (
    <div>
   
         <img src={data?.image} alt="" />
      <p> <b> Brand - </b>  {data?.brand}</p>
      <p> <b> Rating - </b>  {data?.ratings}</p>
      <p> <b> Category - </b>  {data?.category}</p>
      <p> <b> Description - </b>  {data?.desc}</p>
      <p> <b> Price - </b>  &#8377; {data?.price}</p>
      <Button>Add to Cart</Button>
    </div>
  )
}

export default Women_single_page
