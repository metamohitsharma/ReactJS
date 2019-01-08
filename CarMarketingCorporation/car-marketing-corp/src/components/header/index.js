import Brand from './brand'
import { Col, Grid, Row } from 'react-bootstrap'
import Logo from './logo'
import PropTypes from 'prop-types'
import React from 'react'

export default class Header extends React.Component {
    static propTypes = {
        selectedBrand: PropTypes.number.isRequired,
        onBrandChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col
                        md={6} >
                        <Logo />
                    </Col>
                    <Col
                        md={3}
                        mdOffset={3}>
                        <Brand
                            selectedBrand={this.props.selectedBrand}
                            onBrandChange={this.props.onBrandChange} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}