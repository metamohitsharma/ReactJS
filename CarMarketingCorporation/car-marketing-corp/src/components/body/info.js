import Moment from 'react-moment'
import { Image, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export class Info extends React.Component {
    static propTypes = {
        carList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            img: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            launchDate: PropTypes.instanceOf(Date).isRequired
        })),
        metaData: PropTypes.object.isRequired
    }

    render() {
        const carIdToDisplay = this.props.match.params.id.toString()
        const car = this.props.carList.find((car, i) =>
            car.id === Number(carIdToDisplay)
        )
        return (
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
                                src={'data:image/png;base64, ' + car.img}
                                alt='Not Found'
                                height='200'
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
        )
    }
}