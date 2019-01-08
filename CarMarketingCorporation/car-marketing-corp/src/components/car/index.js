import { Button, Image, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { metaData } from '../../data/mock-data'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import React from 'react'

export default class Car extends React.Component {
    static propTypes = {
        car: PropTypes.shape({
            id: PropTypes.number.isRequired,
            brandId: PropTypes.number.isRequired,
            img: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            launchDate: PropTypes.instanceOf(Date).isRequired
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    handleShow(id) {
        this.setState({
            show: true
        })
    }

    render() {
        const car = this.props.car
        return (
            <tbody>
                <tr>
                    <td>
                        <Image
                            src={'data:image/png;base64, ' + car.img}
                            alt='Not Found'
                            width='300'
                            height='200' />
                    </td>
                    <td>
                        <b>{metaData.car.title.label}</b>: {car.title} <br />
                        <b>{metaData.car.description.label}</b>: {car.description} <br />
                        <b>{metaData.car.launchDate.label}</b>:
                        <Moment
                            format='MM-DD-YYYY'>
                            {car.launchDate.toString()}
                        </Moment>
                    </td>
                    <td>
                        <Button
                            onClick={this.handleShow.bind(this, car.id)}>
                            Details
                        </Button>
                        <br />
                        <Modal
                            show={this.state.show}
                            onHide={this.handleClose.bind(this)}>
                            <Modal.Header closeButton>
                                <Modal.Title>{car.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>
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
                                                <Image
                                                    src={'data:image/png;base64, ' + car.img}
                                                    alt='Not Found'
                                                    height='200' />
                                            </td>
                                            <td>
                                                {car.description}
                                            </td>
                                            <td>
                                                <Moment
                                                    format='MM-DD-YYYY'>
                                                    {car.launchDate.toString()}
                                                </Moment>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Modal.Body>
                        </Modal>
                        <Link to={'/' + car.id}>For more Information</Link>
                    </td>
                </tr>
            </tbody>
        )
    }
}