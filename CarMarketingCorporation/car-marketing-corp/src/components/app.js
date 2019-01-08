import Body from './body/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header/index'
import { Info } from '../components/body/info'
import React from 'react'

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedBrand: 0
        }
    }

    brandChange(eventKey) {
        this.setState({
            selectedBrand: eventKey
        })
    }
    render() {
        return (
            <div
                className='container'>
                <div>
                    <Header
                        selectedBrand={this.state.selectedBrand}
                        onBrandChange={this.brandChange.bind(this)} />
                    <hr />
                </div >
                <div>
                    <Router>
                        <Switch>
                            <Route exact path='/'
                                render={(props) =>
                                    <Body
                                        selectedBrand={this.state.selectedBrand}
                                        {...props} />} />
                            <Route
                                path='/:id'
                                component={Info} />
                        </Switch>
                    </Router>
                </div>
            </div >
        )
    }
}