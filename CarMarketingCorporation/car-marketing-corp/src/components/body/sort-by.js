import './index.css'
import { sortBy } from '../../data/mock-data'
import React from 'react'

export default class SortBy extends React.Component {
    render() {
        return (
            <div className='body-sort'>
                <div>
                    <span>Sort By</span>
                </div>
                <div>
                    <select>
                        {sortBy.map(
                            (options, i) => <option key={i} >{options.name}</option>)}
                    </select>
                </div>
                <div>
                    <select>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>
            </div>
        )
    }
}