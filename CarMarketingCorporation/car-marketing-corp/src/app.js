import React from 'react'
import { Col, Grid, Row, Tab, Tabs } from 'react-bootstrap'
import { CarApp } from './car-app';
import { TodoApp } from './todo-app';

export default class App extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey={1} id='uncontrolled-tab-example' bsStyle='pills'>
                            <Tab eventKey={1} title='Car Marketing'>
                                <CarApp />
                            </Tab>
                            <Tab eventKey={2} title='Todo'>
                                <TodoApp />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Grid>
        )
    }
}