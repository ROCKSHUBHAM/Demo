import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
const Home = () => {
  let[pdata,updatepdata]=useState([]);
  useEffect(()=>{
    async function show(){
      let d=await axios.get("https://restapittt.herokuapp.com/products/");
      updatepdata(d.data);
    }
    show();
  })
  return (
    <>
        <div className="container">
          <div className="row">
            {
              pdata.map((val)=>{
                return(
                    <Card name={val.name} price={val.price} cat={val.cat} cmp={val.cmp}/>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default Home;
