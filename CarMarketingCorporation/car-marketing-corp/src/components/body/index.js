import Car from '../car/index'
import { brandList, carList, sortBy, sortOrder } from '../../data/mock-data'
import { Col, Grid, Row, Table } from 'react-bootstrap'
import SearchPage from './search'
import SortBy from './sort-by'
import React from 'react'

const sortByOptions = sortBy.map(
    (sortOptions) => sortOptions.name)
const sortOrderOptions = sortOrder.map(
    (order) => order.name)
export default class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortBy: sortByOptions[0],
            sortOrder: sortOrderOptions[0],
            searchBy: ''
        }
    }

    handleSortOptionChange(eventKey) {
        this.setState({
            sortBy: sortByOptions[eventKey]
        })
    }

    handleSortOrderChange(eventKey) {
        this.setState({
            sortOrder: sortOrderOptions[eventKey]
        })
    }

    handleTitleToSearchChange(searchTitle) {
        this.setState({
            searchBy: searchTitle.toLowerCase()
        })
    }

    render() {
        const brandOpted = brandList.find((brand) =>
            brand.name === this.props.selectedBrand)
        const sortedCarList = sortCar(carList, this.state.sortBy, this.state.sortOrder)
        const selectedCars = sortedCarList
            .filter(car => car.brandId === brandOpted.id)
            .filter(car => car.title.toLowerCase().indexOf(this.state.searchBy) >= 0)
        return (
            <Grid>
                <Row>
                    <Col md='6'>
                        <SortBy
                            selectedSortBy={this.state.sortBy}
                            selectedSortOrder={this.state.sortOrder}
                            onSortOptionChange={this.handleSortOptionChange.bind(this)}
                            onSortOrderChange={this.handleSortOrderChange.bind(this)} />
                    </Col>
                    <Col md='4' mdOffset='2'>
                        <SearchPage
                            titleToSearchBy={this.state.searchBy}
                            onTitleToSearchChange={this.handleTitleToSearchChange.bind(this)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered condensed hover>
                            <tbody>
                                {selectedCars.map(
                                    (car, i) =>
                                        <Car
                                            carList={car}
                                            brand={this.props.selectedBrand} />)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

function sortCar(carList, selectedSortByOption, selectedSortOrderOption) {
    if (selectedSortByOption === sortByOptions[0]) {
        if (selectedSortOrderOption === sortOrderOptions[0]) {
            return (carList.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                }
                if (a.title > b.title) {
                    return 1
                }
                return 0
            }))
        } else {
            return (carList.sort((a, b) => {
                if (a.title < b.title) {
                    return 1
                }
                if (a.title > b.title) {
                    return -1
                }
                return 0
            }))
        }
    } else if (selectedSortByOption === sortByOptions[1]) {
        if (selectedSortOrderOption === sortOrderOptions[0]) {
            return (carList.sort((a, b) => {
                if (a.description < b.description) {
                    return -1
                }
                if (a.description > b.description) {
                    return 1
                }
                return 0
            }))
        } else {
            return (carList.sort((a, b) => {
                if (a.description < b.description) {
                    return 1
                }
                if (a.description > b.description) {
                    return -1
                }
                return 0
            }))
        }
    } else {
        if (selectedSortOrderOption === sortOrderOptions[0]) {
            return (carList.sort((a, b) => {
                if (a.launchDate < b.launchDate) {
                    return -1
                }
                if (a.launchDate > b.launchDate) {
                    return 1
                }
                return 0
            }))
        } else {
            return (carList.sort((a, b) => {
                if (a.launchDate < b.launchDate) {
                    return 1
                }
                if (a.launchDate > b.launchDate) {
                    return -1
                }
                return 0
            }))
        }
    }
}