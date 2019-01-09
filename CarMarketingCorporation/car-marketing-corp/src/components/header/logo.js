import { Image } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default class Logo extends React.Component {
    static propTypes = {
        logo: PropTypes.string.isRequired
    }

    render() {
        return (
            <Image
                src={'data:image/png;base64,' + this.props.logo}
                height='100'
                alt='Not Found'
                circle
            />
        )
    }
}