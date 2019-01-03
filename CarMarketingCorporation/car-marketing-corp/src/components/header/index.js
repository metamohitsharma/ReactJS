import Brand from './brand'
import { Col, Grid, Row } from 'react-bootstrap'
import Logo from './logo'
import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <Grid className="show-grid">
                <Row>
                    <Col md={10} >
                        <Logo />
                    </Col>
                    <Col md={2} >
                        <Brand />
                    </Col>
                </Row>
            </Grid>
        )
    }
}