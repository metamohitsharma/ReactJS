import { Glyphicon } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import React from 'react'

const API = 'https://jsonplaceholder.typicode.com/todos'

export default class TodoDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: null
        }
    }

    componentDidMount() {
        fetch(API + '/' + this.props.match.params.id.toString())
            .then(results => {
                return results.json()
            })
            .then(data => {
                this.setState({
                    item: data
                })
            })
    }

    render() {
        if (this.state.item) {
            let button
            this.state.item.completed
                ? button = <span className='glyph-color-ok'><Glyphicon glyph='ok' /></span>
                : button = <span className='glyph-color-remove'><Glyphicon glyph='remove' /></span>
            return (
                <Table striped bordered condensed hover>
                    <tbody>
                        <tr>
                            <td>
                                {this.state.item.id}
                            </td>
                            <td>
                                {this.state.item.title}
                            </td>
                            <td>
                                {button}
                            </td>
                        </tr>
                    </tbody>
                </Table >
            )
        }
        return <React.Fragment></React.Fragment>
    }
}