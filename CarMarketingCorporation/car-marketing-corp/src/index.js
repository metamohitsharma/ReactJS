import App from './app'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CarApp } from './car-app'
import React from 'react'
import ReactDOM from 'react-dom'
import { TodoApp } from './todo-app'

const Apps = () => (
    <Router>
        <Switch>
            <Route
                exact path='/'
                component={App}
            />
            <Route
                path='/car'
                component={CarApp}
            />
            <Route
                path='/todo'
                component={TodoApp}
            />
        </Switch>
    </Router>
)

ReactDOM.render(
    <Apps />,
    document.getElementById('root')
);