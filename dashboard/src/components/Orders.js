

import React, { useEffect, useState } from "react";
import axios  from "axios";




const Orders = () => {
  const [allOrders  , setAllPositions ] =  useState ([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders").then((res)=>{
      console.log(res.data);    
      setAllPositions(res.data);
   
  });
},[]);

  return (
    <>
      <h3 className="title">Orders ({allOrders  .length})</h3>

      <div className="order-table">
      <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Qty.</th>
      <th>Price</th>
      <th>Mode</th>
    </tr>
  </thead>
  <tbody>
    {allOrders.map((stock, index) => (
      <tr key={index}>
        <td>{stock.name}</td>
        <td>{stock.qty}</td>
        <td>{stock.price ? stock.price.toFixed(2) : "N/A"}</td>
        <td>{stock.mode}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </>
  );
};

export default Orders;
