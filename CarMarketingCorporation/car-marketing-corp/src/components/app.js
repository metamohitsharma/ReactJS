import Body from '../components/body/index'
import { brandList } from '../data/mock-data'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header/index'
import { Info } from '../components/body/info'
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
            <div
                className="container">
                < div >
                    <Header
                        selectedBrand={this.state.selectedBrand}
                        onBrandChange={this.brandChange.bind(this)} />
                    <hr />
                </div >
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/"
                                render={(props) =>
                                    <Body
                                        selectedBrand={this.state.selectedBrand} {...props} />} />
                            <Route
                                path="/:id(\d+)"
                                component={Info} />
                        </Switch>
                    </Router>
                </div>
            </div >
        )
    }
}