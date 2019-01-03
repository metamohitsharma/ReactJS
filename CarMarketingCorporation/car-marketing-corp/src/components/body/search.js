import { Col, InputGroup, Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap'
import React from 'react'

export default class SearchPage extends React.Component {
    render() {
        return (
            <Col md='6'>
                <Form>
                    <FormGroup >
                        <InputGroup>
                            <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                            <FormControl
                                type="text"
                                placeholder="Search Here" />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </Col>
        );
    }
}

