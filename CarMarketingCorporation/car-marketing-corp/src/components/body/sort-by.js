import { Col, DropdownButton, MenuItem, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { sortBy, sortOrder } from '../../data/mock-data'
import React from 'react'

export default class SortBy extends React.Component {
    static propTypes = {
        selectedSortBy: PropTypes.number.isRequired,
        selectedSortOrder: PropTypes.number.isRequired,
        onSortOptionChange: PropTypes.func.isRequired,
        onSortOrderChange: PropTypes.func.isRequired
    }

    render() {
        const selectedSortByOption = sortBy.filter((sortOption) =>
            sortOption.id === this.props.selectedSortBy)
        const selectedSortOrderOption = sortOrder.filter((sortOrderOption) =>
            sortOrderOption.id === this.props.selectedSortOrder)
        return (
            <Row>
                <Col md={2}>
                    Sort by
                    </Col>
                <Col md={8}>
                    <DropdownButton
                        id={'SortBy'}
                        title={selectedSortByOption[0].name}
                        onSelect={this.props.onSortOptionChange}>
                        {sortBy.map((options, i) =>
                            <MenuItem
                                key={i}
                                eventKey={i}>{options.name}
                            </MenuItem>)}
                    </DropdownButton>
                    <DropdownButton
                        id={'SortOrder'}
                        title={selectedSortOrderOption[0].name}
                        onSelect={this.props.onSortOrderChange}>
                        {sortOrder.map((order, i) =>
                            <MenuItem
                                key={i}
                                eventKey={i}>{order.name}
                            </MenuItem>)}
                    </DropdownButton>
                </Col>
            </Row>
        )
    }
}