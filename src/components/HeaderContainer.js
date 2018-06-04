import React from 'react'

const HeaderContainer = ({ children }) => (
    <div id="Header">
        <img src="/assets/logo.png" alt="logo" />
        <h1>React VK OAuth demo</h1>
        {children}
    </div>
)

export default HeaderContainer
