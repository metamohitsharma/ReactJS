import { Col, Grid, Row, Table } from 'react-bootstrap'
import './index.css'
import PropTypes from 'prop-types'
import React from 'react'
import Todo from './todo';
import withTodoList from '../../../hoc/todo-list'

class Body extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            completed: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            userId: PropTypes.number.isRequired
        }))
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Table striped bordered condensed hover>
                            <tbody>
                                {this.props.data.map((item, i) => <Todo item={item} key={i} />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default withTodoList('data')(Body)