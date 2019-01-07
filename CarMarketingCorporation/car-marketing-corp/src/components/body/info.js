import { carList, metaData } from '../../data/mock-data'
import Moment from 'react-moment'
import { Table } from 'react-bootstrap'
import React from 'react'

export class Info extends React.Component {
    render() {
        const carIdToDisplay = this.props.match.params.id.toString()
        const car = carList.filter((car, i) =>
            car.id === Number(carIdToDisplay)
        )
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>
                            {metaData.car.title.label}
                        </th>
                        <th>
                            {metaData.car.description.label}
                        </th>
                        <th>
                            {metaData.car.launchDate.label}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={'data:image/png;base64, ' + car[0].img} alt="Not Found" height='200' />
                        </td>
                        <td>
                            {car[0].title}
                        </td>
                        <td>
                            {car[0].description}
                        </td>
                        <td>
                            <Moment
                                format="MM-DD-YYYY">
                                {car[0].launchDate.toString()}
                            </Moment>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}