import React from 'react'
import '../components/nature.css'
import Img1 from '../components/Images/nature/image1.JPG';
import Img2 from './Images/nature/image2.JPG';
import Img3 from './Images/nature/image3.JPG';
import Img4 from './Images/nature/image4.JPG';
import Img5 from './Images/nature/image5.JPG';
import Img6 from './Images/nature/image6.JPG';
import Img7 from './Images/nature/image7.jpg';
import Img8 from './Images/nature/image8.jpg';
import Img9 from './Images/nature/image9.jpg';
import Img10 from './Images/nature/image10.jpg';
import Img11 from './Images/nature/image11.jpg';
import Img12 from './Images/nature/image12.jpg';
import Img13 from './Images/nature/image13.jpg';
import Img14 from './Images/nature/image14.jpg';
import Img15 from './Images/nature/image15.jpg';
import Img16 from './Images/nature/image16.jpg';
import Img17 from './Images/nature/image17.jpg';
import Img18 from './Images/nature/image18.jpg';
import Img19 from './Images/nature/image19.jpg';
import Img20 from './Images/nature/image20.jpg';
import Img21 from './Images/nature/image21.jpg';
import Img22 from './Images/nature/image22.jpg';
import Img23 from './Images/nature/image23.jpg';
import Img24 from './Images/nature/image24.jpg';
import Img25 from './Images/nature/image25.jpg';
import Img26 from './Images/nature/image26.jpg';
import Img27 from './Images/nature/image27.jpg';
import Img28 from './Images/nature/image28.jpg';
import Img29 from './Images/nature/image29.jpg';
import Img30 from './Images/nature/image30.jpg';
import Img31 from './Images/nature/image31.jpg';
import Img32 from './Images/nature/image32.JPG';
import Img33 from './Images/nature/image33.JPG';
import Img34 from './Images/nature/image34.JPG';



const Nature = () => {

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

export default Nature
