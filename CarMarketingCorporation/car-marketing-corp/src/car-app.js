import Body from './containers/car/body/index'
import {
    brandList,
    carList,
    logo,
    metaData,
    sortBy
} from './data/mock-data'
import { Breadcrumb, Col, Grid, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/car/header/index'
import { Info } from './components/car/body/info'
import React from 'react'

export class CarApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: 0,
            data: null
        }
        this.brandChange = this.brandChange.bind(this)
    }

    brandChange(eventKey) {
        this.setState({
            selectedBrand: eventKey
        })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Car Marketing App</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col>
                        <Header
                            brandList={brandList}
                            logo={logo}
                            onBrandChange={this.brandChange}
                            selectedBrand={this.state.selectedBrand}
                        />
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Router>
                            <Switch>
                                <Route
                                    exact path='/car/'
                                    render={(props) =>
                                        <Body
                                            brandList={brandList}
                                            carList={carList}
                                            metaData={metaData}
                                            selectedBrand={this.state.selectedBrand}
                                            sortBy={sortBy}
                                            {...props}
                                        />
                                    }
                                />
                                <Route
                                    path='/car/:id'
                                    render={(props) =>
                                        <Info
                                            carList={carList}
                                            metaData={metaData}
                                            {...props}
                                        />
                                    }
                                />
                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Grid>
        )
    }
}