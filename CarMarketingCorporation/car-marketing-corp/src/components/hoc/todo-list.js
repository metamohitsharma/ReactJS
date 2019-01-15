import './loader.css'
import React from 'react'

const withTodoList = (propName) => (ChildComponent) => {
    return class TodoListWrapper extends React.Component {
        render() {
            return this.props[propName]
                ? <ChildComponent {...this.props} />
                : <div className='loader'></div>
        }
    }
}

export default withTodoList
