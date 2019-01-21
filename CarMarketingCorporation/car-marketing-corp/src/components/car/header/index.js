import Brand from './brand'
import { Col, Grid, Row } from 'react-bootstrap'
import Logo from './logo'
import PropTypes from 'prop-types'
import React from 'react'

export default class Header extends React.Component {
    static propTypes = {
        brandList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        logo: PropTypes.string.isRequired,
        onBrandChange: PropTypes.func.isRequired,
        selectedBrand: PropTypes.number.isRequired
    }

    static defaultProps = {
        selectedBrand: 0
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <Logo logo={this.props.logo} />
                    </Col>
                    <Col md={3} mdOffset={3}>
                        <Brand
                            brandList={this.props.brandList}
                            onBrandChange={this.props.onBrandChange}
                            selectedBrand={this.props.selectedBrand}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}