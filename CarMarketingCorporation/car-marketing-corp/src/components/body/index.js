import Car from '../car/index'
import { Col, Grid, Row, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'
import SearchPage from './search'
import SortBy from './sort-by'
import withLoggedUser from '../hoc/logged-user'

const ASC = 0
const DSC = 1

class Body extends React.Component {
    static propTypes = {
        brandList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        carList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            img: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            launchDate: PropTypes.instanceOf(Date).isRequired
        })),
        metaData: PropTypes.object.isRequired,
        selectedBrand: PropTypes.number.isRequired,
        sortBy: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }))
    }

    static defaultProps = {
        selectedBrand: 0
    }

    constructor(props) {
        super(props)
        this.state = {
            searchBy: '',
            sortField: 0,
            direction: ASC
        }
        this.handleDirection = this.handleDirection.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSort = this.handleSort.bind(this)
    }

    carToDisplay(carList) {
        if (carList.length === 0) {
            return <span>No Car Found having Title '{this.state.searchBy}' :(</span>
        } else {
            return carList.map((car, i) =>
                <Car
                    key={i}
                    car={car}
                    metaData={this.props.metaData}
                />
            )
        }
    }

    handleDirection(eventKey) {
        this.setState({
            direction: eventKey ? DSC : ASC
        })
    }

    handleSearch(searchBy) {
        this.setState({
            searchBy: searchBy.toLowerCase()
        })
    }

    handleSort(eventKey) {
        this.setState({
            sortField: eventKey
        })
    }

    sortCar(carList, sortField, direction) {
        if (direction === 0) {
            return carList.sort((a, b) => {
                return a[sortField] < b[sortField] ? -1 : (a[sortField] > b[sortField] ? 1 : 0)
            })
        }
        return carList.sort((a, b) => {
            return a[sortField] < b[sortField] ? 1 : (a[sortField] > b[sortField] ? -1 : 0)
        })
    }

    render() {
        const brandOpted = this.props.brandList.find((brand) =>
            brand.id === this.props.selectedBrand)
        const selectedSortField = this.props.sortBy.find((option) =>
            option.id === this.state.sortField)
        const selectedCars = this.props.carList
            .filter(car => car.brandId === brandOpted.id)
            .filter(car => car.title.toLowerCase().indexOf(this.state.searchBy) >= 0)
        const sortedCarList = this.sortCar(selectedCars, selectedSortField.name, this.state.direction)
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <b>Welcome {this.props.user}!! :)</b>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <SortBy
                            direction={this.state.direction}
                            onDirectionChange={this.handleDirection}
                            onSortChange={this.handleSort}
                            selectedSortField={this.state.sortField}
                            sortBy={this.props.sortBy}
                        />
                    </Col>
                    <Col md={4} mdOffset={2}>
                        <SearchPage
                            onSearchChange={this.handleSearch} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered condensed hover>
                            {this.carToDisplay(sortedCarList)}
                        </Table>
                    </Col>
                </Row>
            </Grid >
        )
    }
}

export default withLoggedUser(Body)