import { createStore } from 'redux'
import rotateReducer from './reducers/rotate-reducer'

export default function configureState(state = { rotating: true }) {
    return createStore(rotateReducer, state);
}