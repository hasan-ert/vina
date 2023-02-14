import React from 'react'
import { Row , Col} from 'react-bootstrap'
import "./Card.css"

export default function InfoCard({title,content}){
    return (
        <>
            <div className='card-wrapper'>
                <Row>
                    <Col xs={12}>
                        <h2>{title}</h2>
                    </Col>
                    <Col xs={12}>
                        <p>{content}</p>
                    </Col>
                </Row>
            </div>
        </>
    )

}