import React from 'react'
import '../components/buildings.css'
import Img1 from '../components/Images/buildings/image1.JPG';
import Img2 from './Images/buildings/image2.JPG';
import Img3 from './Images/buildings/image3.JPG';
import Img4 from './Images/buildings/image4.JPG';
import Img5 from './Images/buildings/image5.JPG';
import Img6 from './Images/buildings/image6.JPG';
import Img7 from './Images/buildings/image7.JPG';
import Img8 from './Images/buildings/image8.jpg';
import Img9 from './Images/buildings/image9.jpg';
import Img10 from './Images/buildings/image10.jpg';
import Img11 from './Images/buildings/image11.jpg';
import Img12 from './Images/buildings/image12.jpg';
import Img13 from './Images/buildings/image13.jpg';
import Img14 from './Images/buildings/image14.jpg';
import Img15 from './Images/buildings/image15.jpg';
import Img16 from './Images/buildings/image16.jpg';
import Img17 from './Images/buildings/image17.jpg';
import Img18 from './Images/buildings/image18.jpg';
import Img19 from './Images/buildings/image19.jpg';
import Img20 from './Images/buildings/image20.jpg';
import Img21 from './Images/buildings/image21.jpg';
import Img22 from './Images/buildings/image22.jpg';
import Img23 from './Images/buildings/image23.jpg';
import Img24 from './Images/buildings/image24.jpg';
import Img25 from './Images/buildings/image25.jpg';
import Img26 from './Images/buildings/image26.jpg';
import Img27 from './Images/buildings/image27.jpg';
import Img28 from './Images/buildings/image28.jpg';
import Img29 from './Images/buildings/image29.jpg';
import Img30 from './Images/buildings/image30.jpg';
import Img31 from './Images/buildings/image31.jpg';
import Img32 from './Images/buildings/image32.jpg';
import Img33 from './Images/buildings/image33.jpg';
import Img34 from './Images/buildings/image34.JPG';
import Img35 from './Images/buildings/image35.jpg';
import Img36 from './Images/buildings/image36.jpg';
import Img37 from './Images/buildings/image37.jpg';
import Img38 from './Images/buildings/image38.jpg';
import Img39 from './Images/buildings/image39.jpg';


const Buildings = () => {

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
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
            },
            {
                id: 22,
                imgSrc: Img22,
            },
            {
                id: 23,
                imgSrc: Img23,
            },
            {
                id: 24,
                imgSrc: Img24,
            },
            {
                id: 25,
                imgSrc: Img25,
            },
            {
                id: 26,
                imgSrc: Img26,
            },
            {
                id: 27,
                imgSrc: Img27,
            },
            {
                id: 28,
                imgSrc: Img28,
            },
            {
                id: 29,
                imgSrc: Img29,
            },
            {
                id: 30,
                imgSrc: Img30,
            },
            {
                id: 31,
                imgSrc: Img31,
            },
            {
                id: 32,
                imgSrc: Img32,
            },
            {
                id: 33,
                imgSrc: Img33,
            },
            {
                id: 34,
                imgSrc: Img34,
            },
            {
                id: 35,
                imgSrc: Img35,
            },
            {
                id: 36,
                imgSrc: Img36,
            },
            {
                id: 37,
                imgSrc: Img37,
            },
            {
                id: 38,
                imgSrc: Img38,
            },
            {
                id: 39,
                imgSrc: Img39,
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

export default Buildings
