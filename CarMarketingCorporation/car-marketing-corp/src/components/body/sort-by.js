import { Col, DropdownButton, MenuItem, Row } from 'react-bootstrap'
import { sortBy, sortOrder } from '../../data/mock-data'
import React from 'react'

export default class SortBy extends React.Component {
    render() {
        return (
            <Row>
                <Col md={2}>
                    Sort by
                    </Col>
                <Col md={8}>
                    <DropdownButton
                        id={"SortBy"}
                        title={this.props.selectedSortBy}
                        onSelect={this.props.onSortOptionChange}>
                        {sortBy.map(
                            (options, i) => <MenuItem key={i} eventKey={i}>{options.name}</MenuItem>)}
                    </DropdownButton>
                    <DropdownButton
                        id={"SortOrder"}
                        title={this.props.selectedSortOrder}
                        onSelect={this.props.onSortOrderChange}>
                        {sortOrder.map(
                            (order, i) => <MenuItem key={i} eventKey={i}>{order.name}</MenuItem>)}
                    </DropdownButton>
                </Col>
            </Row>
        )
    }
}