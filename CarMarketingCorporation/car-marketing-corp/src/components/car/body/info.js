import { Breadcrumb, Image, Table } from 'react-bootstrap'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import React from 'react'

export class Info extends React.Component {
    static propTypes = {
        carList: PropTypes.arrayOf(PropTypes.shape({
            brandId: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            img: PropTypes.string,
            launchDate: PropTypes.instanceOf(Date).isRequired,
            title: PropTypes.string.isRequired
        })),
        metaData: PropTypes.object.isRequired
    }

    render() {
        const carIdToDisplay = this.props.match.params.id.toString()
        const car = this.props.carList.find((car, i) =>
            car.id === Number(carIdToDisplay)
        )
        return (
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item href='/car/'>Cars</Breadcrumb.Item>
                    <Breadcrumb.Item active>{car.title}</Breadcrumb.Item>
                </Breadcrumb>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                {this.props.metaData.car.title.label}
                            </th>
                            <th>
                                {this.props.metaData.car.description.label}
                            </th>
                            <th>
                                {this.props.metaData.car.launchDate.label}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Image
                                    alt='Not Found'
                                    height='200'
                                    src={'data:image/png;base64, ' + car.img}
                                />
                            </td>
                            <td>
                                {car.title}
                            </td>
                            <td>
                                {car.description}
                            </td>
                            <td>
                                <Moment format='MM-DD-YYYY'>
                                    {car.launchDate.toString()}
                                </Moment>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}