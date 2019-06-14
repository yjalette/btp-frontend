import React from 'react';
import { Button } from 'react-bootstrap';

const Descriptions = (props) => {
    if (!props.showMore) {
        return (
            <span className="handwritting">"{props.text.slice(0, 160)}
                    <Button variant="" className="text-green" onClick={props.handleClick}>more...</Button>"
            </span>

        )
    }
    return (
            <span className="handwritting">{props.text}</span>

    )

}

export default Descriptions;