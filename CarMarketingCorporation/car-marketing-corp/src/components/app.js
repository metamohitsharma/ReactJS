import Body from '../components/body/index'
import { brandList } from '../data/mock-data'
import Header from '../components/header/index'
import React from 'react'

const brands = brandList.map(
    (brand, i) => brand.name)

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: brands[0]
        }
    }

    brandChange(eventKey) {
        this.setState({
            selectedBrand: brands[eventKey]
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                    <Header
                        selectedBrand={this.state.selectedBrand}
                        onBrandChange={this.brandChange.bind(this)} />
                    <hr />
                </div>
                <div>
                    <Body
                        selectedBrand={this.state.selectedBrand} />
                </div>
            </div>
        )
    }
}