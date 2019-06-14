import React from 'react';
import "./Hostel.css";
import hostel from '../../images/hostel-people.jpg';
import cafe from '../../images/hostel-cafe.jpg';
import room from '../../images/hostel-room.jpg';

import ImageGallery from 'react-image-gallery';


class  HostelSlider extends React.Component {
    
    render(){

        const images = [
            {
              original: `${hostel}`,
              thumbnail: `${hostel}`
            },
            {
              original: `${cafe}`,
              thumbnail: `${cafe}`
            },
            {
              original: `${room}`,
              thumbnail: `${room}`
            }
          ]
        return (
            <ImageGallery items={images} />  
        )
    }
}
   


export default HostelSlider;