import Brand from './brand';
import './index.css'
import Logo from './logo';
import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    <Logo />
                </div>
                <div>
                    <Brand />
                </div>
            </div>
        )
    }
}