import React, { Component } from 'react'

import Comments from '../Components/Comments'

class CommentsContainer extends Component {
    state = {
        text: ''
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    render() {
        return (
            <Comments
                comments={this.props.navigation.state.params.comments}
                state={this.state}
                changeState={this.handleChangeState}
            />
        )
    }
}

export default CommentsContainer
