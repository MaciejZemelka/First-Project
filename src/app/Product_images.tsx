'use client'
import Image from 'next/image'
import React, { useEffect, useState } from "react";


const images = ["IMG/product-photo-1.jpg",
                "IMG/product-photo-2.jpg",
                "IMG/product-photo-3.jpg",
                "IMG/product-photo-4.jpg",
                "IMG/product-photo-5.jpg",
                "IMG/product-photo-6.jpg"];

export default function ProductImages() {
    const [ currentImage, setImage] = useState(0);
    const [ currentSmallImage, setSmallImage] = useState(1);
    
    const ChangeImage = ()=>{
        currentImage == 5 ? setImage(0) : setImage(currentImage+1);
        currentSmallImage == 5 ? setSmallImage(0) : setSmallImage(currentSmallImage+1);

    }

    setInterval(() =>{
        ChangeImage();
    }, 15000);

    const ClickChange = (item:number) =>{
        if(item==0)
        {
            setImage(currentSmallImage); 
            currentSmallImage == 5 ? setSmallImage(0) : setSmallImage(currentSmallImage+1);
        }
        if(item==1)
        {
            currentSmallImage+1 == 6 ? setImage(0) : setImage(currentSmallImage+1);

            currentSmallImage+1 == 5 ? setSmallImage(0)  : currentSmallImage+1 == 6 ? setSmallImage(1) : setSmallImage(currentSmallImage+2);
        }
        if(item==2)
        {
            currentSmallImage+2 == 6 ? setImage(0) : currentSmallImage+2 == 7 ? setImage(1) : setImage(currentSmallImage+2);
            
            currentSmallImage+2 == 5 ? setSmallImage(0) : currentSmallImage+2 == 6 ? setSmallImage(1) : currentSmallImage+2==7 ? setSmallImage(2) : setSmallImage(currentSmallImage+3);
        }
    }

    return (
        <div className='w-[100%] grid col-span-3  min-[100px]:ml-[50px]  min-[1775px]:ml-[130px] '>
            <div className='p-2  '>
                <img className="w-[30rem] max-[700px]:w-[12rem] min-[700px]:max-[999px]:w-[21rem] min-[1000px]:max-[1179px]:w-[15rem] min-[1180px]:max-[1725px]:w-[18rem] p-1 rounded-[1rem]" src={images[currentImage]}  /> 
            </div>
            <div className='flex p-2  ' >
                <img className="w-[10rem] max-[700px]:w-[4rem] min-[700px]:max-[999px]:w-[7rem] min-[1000px]:max-[1179px]:w-[5rem]  min-[1180px]:max-[1725px]:w-[6rem] p-1 rounded-[1rem]" onClick={() =>ClickChange(0)} src={images[currentSmallImage]} />
                <img className="w-[10rem] max-[700px]:w-[4rem] min-[700px]:max-[999px]:w-[7rem] min-[1000px]:max-[1179px]:w-[5rem]  min-[1180px]:max-[1725px]:w-[6rem] p-1 rounded-[1rem]" onClick={() =>ClickChange(1)} src={images[currentSmallImage+1 == 6 ? 0 : currentSmallImage+1]} />
                <img className="w-[10rem] max-[700px]:w-[4rem] min-[700px]:max-[999px]:w-[7rem] min-[1000px]:max-[1179px]:w-[5rem]  min-[1180px]:max-[1725px]:w-[6rem] p-1 rounded-[1rem]" onClick={() =>ClickChange(2)} src={images[currentSmallImage+2 == 6 ? 0 : currentSmallImage+2 == 7 ? 1 : currentSmallImage+2]}  />
            </div>
        </div>
    )
}