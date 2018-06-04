import React, { Component } from 'react'

class LoginContainer extends Component {
    componentDidUpdate() {
        // VK.UI.button('AuthorizeButton')
    }

    render = () => {
        return (
        <div id='LoginContainer' className='inner-container'>
            <div id="LoginAuthorize">To continue, please</div>
            <button id="LoginAuthorizeButton" className="red light" type="submit" onClick={this.props.onLogin}>Log in</button>
            <div>to your <span>VK.com</span> account</div>
        </div>
    )}
}

export default LoginContainer
