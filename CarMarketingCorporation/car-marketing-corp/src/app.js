import './app.css'
import { car, todo } from './data/mock-data'
import { Col, Grid, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <Link to='/car'>
                            <div class='card'>
                                <Image src={'data:image/png;base64, ' + car} alt='Avatar' height='300px' />
                                <div class='container'>
                                    <h3><b>Car Marketing App</b></h3>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md={6}>
                        <Link to='/todo'>
                            <div class='card' >
                                <Image src={'data:image/png;base64, ' + todo} alt='Avatar' height='300px' />
                                <div class='container'>
                                    <h3><b>Todo App</b></h3>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}