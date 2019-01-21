import Body from './components/todo/body/index-todo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Grid, Row } from 'react-bootstrap'
import React from 'react'
import TodoDetails from './containers/todo/body/todo-details'

const API = 'https://jsonplaceholder.typicode.com/todos'

export class TodoApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch(API)
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({
                    data
                })
            })
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
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