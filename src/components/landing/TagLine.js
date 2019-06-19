import React from 'react';

import {Container} from 'react-bootstrap';

const TagLine = (props) => {

    const cover = {
        backgroundImage: `url(${props.image})`
    }             

    return (
        (   <Container className="wrapper bg-img-col flex-center height-sm" style={cover} fluid>
                                <span className="text-light text-center display-4">{props.text}</span>
                            </Container>
                        )
    )

}
export default TagLine;