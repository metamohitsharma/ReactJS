import Body from './components/body/index'
import Header from './components/header/index'
import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(
    <div className="container">
        <div>
            <Header />
            <hr />
        </div>
        <div>
            <Body />
        </div>
    </div>,
    document.getElementById('root')
);