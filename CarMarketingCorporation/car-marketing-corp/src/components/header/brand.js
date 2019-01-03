import { brandList } from '../../data/mock-data'
import { Col, DropdownButton, MenuItem } from 'react-bootstrap'
import React from 'react'

const brands = brandList.map(
    (brand, i) => brand.name)

export default class Brand extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: brands[0]
        }
    }

    handleSelect(eventKey, event) {
        this.setState({ selectedBrand: brands[eventKey] })
    }

    render() {
        return (
            <Col>
                <span>Brand: </span>
                <DropdownButton
                    title={this.state.selectedBrand}
                    onSelect={this.handleSelect.bind(this)}>
                    {brandList.map(
                        (brand, i) => <MenuItem key={i} eventKey={i}>{brand.name}</MenuItem>)}
                </DropdownButton>
            </Col>
        )
    }
}