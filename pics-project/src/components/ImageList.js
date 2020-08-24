import React from 'react';

const ImageList = (props)=>{
    const images = props.images.map(({description,id,urls})=> {
   return <img alt={description} key={id} src={urls.regular}  /> 
    })
    return <div>{images}</div>;
}; // we use the key for each image in the array so that react can track them using their key and id


export default ImageList;
