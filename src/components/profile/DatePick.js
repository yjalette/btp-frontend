import React from 'react';

import { Form } from 'react-bootstrap';

const DatePick = (props) => (
    <section className="flex-center flex-row">
        <Form.Control className="p-1 m-2 text-center rounded muted" name="day" type="number" onChange={props.selectDay} placeholder="day"/>
        <Form.Control as="select" className="p-1 m-2 text-center rounded muted" name="month" type="text" onChange={props.selectMonth}>
            <option>month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
        </Form.Control>
        <Form.Control className="p-1 m-2 text-center rounded muted" name="year" type="number" onChange={props.selectYear} placeholder="year" />
    </section>
)

export default DatePick;