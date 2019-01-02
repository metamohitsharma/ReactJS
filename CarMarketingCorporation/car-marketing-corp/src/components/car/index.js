import './index.css'
import { metaData } from '../../data/mock-data'
import React from 'react'

export default class Car extends React.Component {
    render() {
        const carList = this.props.carList
        return (
            <div className="car">
                <div className="car-header">
                    <img src={'data:image/png;base64, ' + carList.img} />
                </div>
                <div className="car-header">
                    <div>
                        <p>
                            <span>{metaData.car.title.label} :- </span>
                            <span>{carList.title}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>{metaData.car.description.label} :- </span>
                            <span>{carList.description}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>{metaData.car.launchDate.label} :- </span>
                            <span>{carList.launchDate.toString()}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}