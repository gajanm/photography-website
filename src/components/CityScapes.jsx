import React from 'react'
import '../components/buildings.css'
import Img1 from '../components/Images/city-scapes/image1.jpg';
import Img2 from './Images/city-scapes/image2.jpg';
import Img3 from './Images/city-scapes/image3.jpg';
import Img4 from './Images/city-scapes/image4.jpg';
import Img5 from './Images/city-scapes/image5.jpg';
import Img6 from './Images/city-scapes/image6.jpg';
import Img7 from './Images/city-scapes/image7.jpg';
import Img8 from './Images/city-scapes/image8.jpg';
import Img9 from './Images/city-scapes/image9.jpg';
import Img10 from './Images/city-scapes/image10.jpg';
import Img11 from './Images/city-scapes/image11.jpg';
import Img12 from './Images/city-scapes/image12.jpg';
import Img13 from './Images/city-scapes/image13.jpg';
import Img14 from './Images/city-scapes/image14.jpg';
import Img15 from './Images/city-scapes/image15.jpg';
import Img16 from './Images/city-scapes/image16.jpg';
import Img17 from './Images/city-scapes/image17.jpg';
import Img18 from './Images/city-scapes/image18.jpg';
import Img19 from './Images/city-scapes/image19.jpg';



const CityScapes = () => {

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
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
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

export default CityScapes