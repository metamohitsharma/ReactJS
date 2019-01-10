import { DropdownButton, MenuItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default class SortBy extends React.Component {
    static propTypes = {
        direction: PropTypes.number.isRequired,
        onDirectionChange: PropTypes.func.isRequired,
        onSortChange: PropTypes.func.isRequired,
        selectedSortField: PropTypes.number.isRequired,
        sortBy: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }))
    }

    render() {
        const selectedSortBy = this.props.sortBy.find((sortOption) =>
            sortOption.id === this.props.selectedSortField)
        return (
            <React.Fragment>
                <span>Sort By</span>
                <DropdownButton
                    id={'SortBy'}
                    title={selectedSortBy.label}
                    onSelect={this.props.onSortChange}
                >
                    {this.props.sortBy.map((options, i) =>
                        <MenuItem key={i} eventKey={i}>
                            {options.label}
                        </MenuItem>
                    )}
                </DropdownButton>
                <DropdownButton
                    id={'SortOrder'}
                    title={this.props.direction ? 'Descending' : 'Ascending'}
                    onSelect={this.props.onDirectionChange}
                >
                    <MenuItem key={0} eventKey={0}>Ascending</MenuItem>
                    <MenuItem key={1} eventKey={1}>Descending</MenuItem>
                </DropdownButton>
            </React.Fragment>
        )
    }
}