import React, {Component} from 'react';

import {Container} from 'react-bootstrap';
import ProfileSections from './ProfileSections';

import couple from '../../images/couple.jpg';
import ProfileReview from './ProfileReview';

const cover = {
    backgroundImage: `url(${couple})`,
    height: '500px'
}

class ProfileView extends Component {
    render(){
      return(
            <Container className="section-wrapper" fluid>
                <section className="height-sm bg-img-col" style={cover}></section>
                <Container className="bg-light-green top-profile p-3">
                            <ProfileSections />
                            <ProfileReview />
                </Container>
          </Container>
          
            

            )
        }
      
    }

export default ProfileView;
