import { Col, DropdownButton, MenuItem, Row } from 'react-bootstrap'
import { sortBy } from '../../data/mock-data'
import React from 'react'

const sortOptions = sortBy.map((option) => option.name)
const sortOrder = ['Ascending', 'Descending']

export default class SortBy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: sortOptions[0],
            selectedOrder: sortOrder[0]
        }
    }

    handleSort(eventKey, event) {
        this.setState({ selectedOption: sortOptions[eventKey] })
    }

    handleOrder(eventKey, event) {
        this.setState({ selectedOrder: sortOrder[eventKey] })
    }
    render() {
        return (
            <Row>
                <Col md='2'>
                    Sort by
                    </Col>
                <Col md='8'>
                    <DropdownButton
                        title={this.state.selectedOption}
                        onSelect={this.handleSort.bind(this)}>
                        {sortBy.map(
                            (options, i) => <MenuItem key={i} eventKey={i}>{options.name}</MenuItem>)}
                    </DropdownButton>
                    <DropdownButton
                        title={this.state.selectedOrder}
                        onSelect={this.handleOrder.bind(this)}>
                        {sortOrder.map(
                            (order, i) => <MenuItem key={i} eventKey={i}>{order}</MenuItem>)}
                    </DropdownButton>
                </Col>
            </Row>
        )
    }
}