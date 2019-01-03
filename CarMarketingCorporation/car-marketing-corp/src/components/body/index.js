import Car from '../car/index'
import { carList, metaData } from '../../data/mock-data'
import { Col, Grid, Row, Table } from 'react-bootstrap'
import SearchPage from './search'
import SortBy from './sort-by'
import React from 'react'

export default class Body extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md='6'>
                        <SortBy />
                    </Col>
                    <Col md='4' mdOffset='2'>
                        <SearchPage />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>{metaData.car.title.label}</th>
                                    <th>{metaData.car.description.label}</th>
                                    <th>{metaData.car.launchDate.label}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carList.map(
                                    (car, i) => <Car carList={car} />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}