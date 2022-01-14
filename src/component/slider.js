import React from 'react';
import { Carousel } from 'primereact/carousel'; 

function Slider(){
    const slideTemplate = (text) => {
        return (
           <div>
               <h1>{text}</h1>
           </div>
        )
    }
    const slides=["Welcome","Bags & Accessories","Trending Now"];
    return(
        <div>
              <Carousel numVisible={1} numScroll={1} autoplayInterval={1000} 
                value= {slides} itemTemplate={slideTemplate} header={<h5>Basic</h5>} />
        </div>
    )
};

export default Slider;