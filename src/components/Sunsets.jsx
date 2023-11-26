import React from 'react'
import '../components/buildings.css'
import Img1 from '../components/Images/sunsets/image1.jpg';
import Img2 from './Images/sunsets/image2.jpg';
import Img3 from './Images/sunsets/image3.jpg';
import Img4 from './Images/sunsets/image4.jpg';
import Img5 from './Images/sunsets/image5.jpg';
import Img6 from './Images/sunsets/image6.jpg';
import Img7 from './Images/sunsets/image7.jpg';
import Img8 from './Images/sunsets/image8.jpg';


 

const Sunsets = () => {

    let data = [
        {
        id: 1,
        imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        
        
            

]
  return (
    <div className="gallery">
    
      {data.map((item, index)=>{
        return (
            <div className="pics" key={index}>
                <img src={item.imgSrc} />
            </div>
        )
        })}
    </div>
  )
}

export default Sunsets