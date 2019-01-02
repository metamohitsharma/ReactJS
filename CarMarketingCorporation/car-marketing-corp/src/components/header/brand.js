import { brandList } from '../../data/mock-data'
import React from 'react'

export default class Brand extends React.Component {
    render() {
        return (
            <div>
                <span>Brand :-</span>
                <select>
                    {brandList.map(
                        (brand, i) => <option key={i} >{brand.name}</option>)}
                </select>
            </div>
        )
    }
}