'use client'
 
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function OtherProducts({item}:{item:number}) {

  const [ ProductImg, setImage] = useState("");
  useEffect(()=>{
    
    fetch('https://fakestoreapi.com/products/' + item )
    .then(res => res.json())
    .then(data => setImage(data.image))
  },[]);
  
  return (
    <img src={ProductImg} alt="JD" className="p-[10px] w-[300px] h-[300px] max-[560px]:w-[150px] max-[560px]:h-[150px] "/>
    )
}