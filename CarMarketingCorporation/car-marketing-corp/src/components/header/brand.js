import { brandList } from '../../data/mock-data'
import { Col, DropdownButton, MenuItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default class Brand extends React.Component {
    static propTypes = {
        selectedBrand: PropTypes.number.isRequired,
        onBrandChange: PropTypes.func.isRequired
    }

    render() {
        const brandName = brandList.filter((brand) =>
            brand.id === this.props.selectedBrand)
        return (
            <Col>
                <span>Brand: </span>
                <DropdownButton
                    title={brandName[0].name}
                    id={'Brands'}
                    onSelect={this.props.onBrandChange}>
                    {brandList.map((brand, i) =>
                        <MenuItem
                            key={i}
                            eventKey={i}>{brand.name}
                        </MenuItem>)}
                </DropdownButton>
            </Col >
        )
    }
}