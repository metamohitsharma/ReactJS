import { Col, Image } from 'react-bootstrap'
import { logo } from '../../data/mock-data'
import React from 'react'

export default class Logo extends React.Component {
    render() {
        return (
            <Col>
                <Image
                    src={'data:image/png;base64,' + logo}
                    height='100'
                    alt='Not Found'
                    circle />
            </Col>
        )
    }
}