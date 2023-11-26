import React from 'react'
import '../components/buildings.css'
import Img1 from '../components/Images/night-skies/image1.jpg';
import Img2 from './Images/night-skies/image2.JPG';
import Img3 from './Images/night-skies/image3.jpg';
import Img4 from './Images/night-skies/image4.jpg';
import Img5 from './Images/night-skies/image5.jpg';
import Img6 from './Images/night-skies/image6.jpg';



 

const NightSkies = () => {

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

export default NightSkies