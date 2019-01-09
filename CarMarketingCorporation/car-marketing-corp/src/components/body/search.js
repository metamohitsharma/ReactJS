import { InputGroup, Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default class SearchPage extends React.Component {
    static propTypes = {
        onSearchChange: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event) {
        this.props.onSearchChange(event.target.value)
    }

    render() {
        return (
            <Form>
                <FormGroup >
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph='search' />
                        </InputGroup.Addon>
                        <FormControl
                            onChange={this.handleSearch}
                            placeholder='Search Here'
                            type='text'
                        />
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

