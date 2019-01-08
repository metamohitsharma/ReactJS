import { Col, InputGroup, Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default class SearchPage extends React.Component {
    static propTypes = {
        onTitleToSearchChange: PropTypes.func.isRequired
    }

    handleOnChangeSearch(event) {
        this.props.onTitleToSearchChange(event.target.value)
    }
    render() {
        return (
            <Col md={6}>
                <Form>
                    <FormGroup >
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph='search' />
                            </InputGroup.Addon>
                            <FormControl
                                type='text'
                                placeholder='Search Here'
                                onChange={this.handleOnChangeSearch.bind(this)} />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </Col>
        )
    }
}

