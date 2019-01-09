import Body from './body/index'
import {
    brandList,
    carList,
    logo,
    metaData,
    sortBy
} from '../data/mock-data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Grid, Row } from 'react-bootstrap'
import Header from '../components/header/index'
import { Info } from '../components/body/info'
import React from 'react'

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: 0
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
                                    exact path='/'
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
                                    path='/:id'
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