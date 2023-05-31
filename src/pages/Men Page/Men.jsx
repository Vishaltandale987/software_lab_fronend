import React, { useEffect, useState } from "react";
import Man_Inventry from "./Man_Inventry";
import axios from "axios";

function Men() {
  const [data, setdata] = useState()

  
  
    const handle_getdata =  async () => {

      try {
        
        let res = await axios("http://localhost:8080/products/men")
    
        setdata(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      handle_getdata()
    }, [])
    
    // console.log("data",data)


  return (
    <div>
      {data?.map((el, index) => {
        return <Man_Inventry key={index} men_data={el} />;
      })}
    </div>
  );
}

export default Men;
