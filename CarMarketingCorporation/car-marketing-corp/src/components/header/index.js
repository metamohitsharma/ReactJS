import Brand from './brand'
import Logo from './logo';
import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <Brand />
            </div>
        )
    }
}