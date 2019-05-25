import React from 'react';
import { Button } from 'react-bootstrap';

const AboutUser = (props) => {
    if (!props.showMore) {
        return (
            <section className="p-1 font-med text-secondary text-secondary ">
                about: <span className="handwritting">{props.text.slice(0, 5)}
                    <Button variant="" className="" onClick={props.handleClick}>...</Button>"</span>
            </section>
        )
    }
    return (
        <section className="p-1 font-med text-secondary text-secondary ">
                about: <span className="handwritting">{props.text}</span>
        </section>
    )

}

export default AboutUser;