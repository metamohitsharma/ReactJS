import { brandList } from '../../data/mock-data'
import { Col, DropdownButton, MenuItem } from 'react-bootstrap'
import React from 'react'

export default class Brand extends React.Component {

    render() {
        return (
            < Col >
                <span>Brand: </span>
                <DropdownButton
                    title={this.props.selectedBrand}
                    onSelect={this.props.onBrandChange}>
                    {brandList.map(
                        (brand, i) => <MenuItem key={i} eventKey={i}>{brand.name}</MenuItem>)}
                </DropdownButton>
            </Col >
        )
    }
}