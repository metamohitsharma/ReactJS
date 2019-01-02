import Car from '../car/index'
import { carList } from '../../data/mock-data'
import SearchPage from './search'
import SortBy from './sort-by'
import React from 'react'

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <div className="body-sort">
                    <div>
                        <SortBy />
                    </div>
                    <div>
                        <SearchPage />
                    </div>
                </div>
                <div>
                    {carList.map(
                        (car, i) => <Car carList={car} />)}
                </div>
            </div>
        )
    }
}