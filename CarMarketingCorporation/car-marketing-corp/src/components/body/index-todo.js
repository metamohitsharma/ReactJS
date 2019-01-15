import { Col, Grid, Row, Table } from 'react-bootstrap'
import './index.css'
import React from 'react'
import Todo from './todo';
import withTodoList from '../hoc/todo-list'

class Body extends React.Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Table striped bordered condensed hover>
                            <tbody>
                                {this.props.data.map((item) => <Todo item={item} />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withTodoList('data')(Body)