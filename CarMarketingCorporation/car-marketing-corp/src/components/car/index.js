import { Button, Modal, Table } from 'react-bootstrap'
import { metaData } from '../../data/mock-data'
import Moment from 'react-moment'
import React from 'react'

export default class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


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
                <td>
                    <Button onClick={this.handleShow.bind(this)}>
                        Details
                    </Button>
                    <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{carList.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table>
                                <thead>
                                    <th>
                                    </th>
                                    <th>
                                        {metaData.car.description.label}
                                    </th>
                                    <th>
                                        {metaData.car.launchDate.label}
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={'data:image/png;base64, ' + carList.img} alt="Not Found" height='200' />
                                        </td>
                                        <td>
                                            {carList.description}
                                        </td>
                                        <td>
                                            <Moment
                                                format="MM-DD-YYYY">
                                                {carList.launchDate.toString()}
                                            </Moment>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Modal.Body>
                    </Modal>
                </td>
            </tr>
        )
    }
}