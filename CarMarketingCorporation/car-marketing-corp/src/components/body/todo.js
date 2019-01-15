import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

export default class Todo extends React.Component {

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