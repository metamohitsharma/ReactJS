import { DropdownButton, MenuItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default class Brand extends React.Component {
    static propTypes = {
        brandList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        onBrandChange: PropTypes.func.isRequired,
        selectedBrand: PropTypes.number.isRequired
    }

    render() {
        const brand = this.props.brandList.find((brand) =>
            brand.id === this.props.selectedBrand)
        return (
            <div>
                <span>Brand: </span>
                <DropdownButton
                    id={'Brands'}
                    onSelect={this.props.onBrandChange}
                    title={brand.name}
                >
                    {this.props.brandList.map((brand, i) =>
                        <MenuItem key={i} eventKey={i}>
                            {brand.name}
                        </MenuItem>
                    )}
                </DropdownButton>
            </div>
        )
    }
}