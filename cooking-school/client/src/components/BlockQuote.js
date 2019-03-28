import React from 'react';
import {Card} from 'react-bootstrap';
import vasoSide from '../images/vasoSide.jpg';

const BlockQuote = () => (
  <Card className="text-white header container-fluid p-0 border-0">
  <Card.Img src={vasoSide} alt="Vaso" className="bg-header" />
  <Card.ImgOverlay className="p-0 header-wrapper">
    <div className="quote-div p-30 bg-purple">
    <blockquote className="blockquote mb-0">
    <p className="text-light">“...My hope is for guests to indulge in Greek food with some familiarity, thanks to American ingredients that help them connect to, and understand, each dish...” </p>
    <footer className=""><cite className="blockquote-footer text-light">Vasiliki Vourliotaki</cite></footer>
  </blockquote>
    </div>
  </Card.ImgOverlay>
</Card>   

)

export default BlockQuote;




