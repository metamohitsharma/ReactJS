import Body from './body/index-todo'
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
import TodoDetails from './body/todo-details'

const API = 'https://jsonplaceholder.typicode.com/todos'

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: 0,
            data: null
        }
        this.brandChange = this.brandChange.bind(this)
    }

    componentDidMount() {
        fetch(API)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({
                    data: data
                })
            })
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
                        {/* <Router>
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
                        </Router> */}
                        <Router>
                            <Switch>
                                <Route
                                    exact path='/'
                                    render={(props) =>
                                        <Body
                                            data={this.state.data}
                                            {...props}
                                        />
                                    }
                                />
                                <Route
                                    path='/:id'
                                    component={TodoDetails}
                                />
                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Grid>
        )
    }
}