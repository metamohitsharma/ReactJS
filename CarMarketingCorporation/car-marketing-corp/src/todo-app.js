import Body from './components/todo/body/index-todo'
import { Breadcrumb, Col, Grid, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
                    <Breadcrumb>
                        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Todo App</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col>
                        <Router>
                            <Switch>
                                <Route
                                    exact path='/todo/'
                                    render={(props) =>
                                        <Body
                                            data={this.state.data}
                                            {...props}
                                        />
                                    }
                                />
                                <Route
                                    path='/todo/:id'
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