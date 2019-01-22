import { Button, Image, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import React from 'react'

export default class Car extends React.Component {
    static propTypes = {
        car: PropTypes.shape({
            brandId: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            img: PropTypes.string,
            launchDate: PropTypes.instanceOf(Date).isRequired,
            title: PropTypes.string.isRequired
        }),
        metaData: PropTypes.object.isRequired
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
                            alt='Not Found'
                            height='200'
                            src={'data:image/png;base64, ' + car.img}
                            width='300'
                        />
                    </td>
                    <td>
                        <b>{this.props.metaData.car.title.label}</b>: {car.title} <br />
                        <b>{this.props.metaData.car.description.label}</b>: {car.description} <br />
                        <b>{this.props.metaData.car.launchDate.label}</b>:
                        <Moment format='MM-DD-YYYY'>
                            {car.launchDate.toString()}
                        </Moment>
                    </td>
                    <td>
                        <Button bsStyle='info' onClick={this.handleShow.bind(this, car.id)} >
                            Details
                        </Button>
                        <br />
                        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
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
                            </Modal.Body>
                        </Modal>
                        <Link to={'/car/' + car.id}>For more Information</Link>
                    </td>
                </tr>
            </tbody>
        )
    }
}