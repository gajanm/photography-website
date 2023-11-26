import React from 'react'
import '../components/buildings.css'
import Img1 from '../components/Images/portraits/image1.jpg';
import Img2 from './Images/portraits/image2.jpg';
import Img3 from './Images/portraits/image3.jpg';
import Img4 from './Images/portraits/image4.jpg';
import Img5 from './Images/portraits/image5.jpg';
import Img6 from './Images/portraits/image6.PNG';
import Img7 from './Images/portraits/image7.PNG';
import Img8 from './Images/portraits/image8.PNG';
import Img9 from './Images/portraits/image9.jpeg'


 

const Portraits = () => {

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
        {
            id: 8,
            imgSrc: Img9,
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

export default Portraits