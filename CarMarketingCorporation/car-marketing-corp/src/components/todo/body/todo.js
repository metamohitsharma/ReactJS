import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

export default class Todo extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            completed: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            userId: PropTypes.number.isRequired
        })
    }

    render() {
        if (this.props.item) {
            let button
            this.props.item.completed
                ? button = <span className='glyph-color-ok'><Glyphicon glyph="ok" /></span>
                : button = <span className='glyph-color-remove'><Glyphicon glyph="remove" /></span>
            return (
                <tr>
                    <td>
                        {this.props.item.id}
                    </td>
                    <td>
                        {this.props.item.title}
                    </td>
                    <td>
                        {button}
                    </td>
                    <td>
                        <Link to={'/' + this.props.item.id}>For More Details</Link>
                    </td>
                </tr>)
        }
        return <React.Fragment></React.Fragment>
    }
}