import brandList from '../../data/mock-data';
import React from 'react';

export default class Brand extends React.Component {
    render() {
        let brandsOption = Object.keys(brandList).map((brand, i) =>
            <option key={i}>{brandList[i].name}</option>)
        return (
            <div>
                <span>Brand :-</span>
                <select>
                    {brandsOption}
                </select>
            </div>
        )
    }
}