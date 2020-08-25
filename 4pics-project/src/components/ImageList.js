import React from 'react';
import "./ImageList.css";
import ImageCard from "./ImageCard"

const ImageList = (props)=>{
    const images = props.images.map((image)=> {
   return <ImageCard key={image.id} image={image} /> 
    })
    return <div className="image-list">{images}</div>;
}; // we use the key for each image in the array so that react can track them using their key and id


export default ImageList;
