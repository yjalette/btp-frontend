import React, {Component} from 'react';
import HeroImage from './HeroImage';
import HowItWorks from './HowItWorks';
import FeaturedHotels from './FeaturedHotels';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import About from './About';
import Fees from './Fees';
import Exchange from './Exchange';
import FavHotels from './FavHotels';

class MainLanding extends Component {
  render(){
    return(
      <div>
        <HeroImage />
        <div className="">
          <About />
          <Exchange />
          <HowItWorks />
          <Fees />
          <FavHotels />
          <FeaturedHotels />
          <FAQ />
          <ContactUs />
        </div>
      </div>
    )
  }
      
}

export default MainLanding;
