import Moment from 'react-moment'
import React from 'react'

export default class Car extends React.Component {
    render() {
        const carList = this.props.carList
        return (
            <tr>
                <td>
                    <img src={'data:image/png;base64, ' + carList.img} alt="Not Found" height='200' />
                </td>
                <td>{carList.title}
                </td>
                <td>{carList.description}</td>
                <td>
                    <Moment
                        format="MM-DD-YYYY">
                        {carList.launchDate.toString()}
                    </Moment>
                </td>
            </tr>
        )
    }
}