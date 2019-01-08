import React from 'react'

const withLoggedUser = (ChildComponent) => {
    return class LoggedUserWrapper extends React.Component {
        state = {
            user: 'Mohit Sharma'
        }
        render() {
            return <ChildComponent
                user={this.state.user}
                {...this.props} />
        }
    }
}

export default withLoggedUser
