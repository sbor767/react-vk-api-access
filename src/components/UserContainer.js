import React from 'react'

const UserContainer = ({ user, onLogout }) => (
    <div id='UserContainer' className='inner-container'>
        <div id="UserAuthorized">Access to VK has been gained</div>
        <button id="UserLogout" className="red light" type="submit" onClick={onLogout}>Log out</button>
        <h3 id="UserName">Your name: {user.firstName} {user.lastName}</h3>
    </div>
)

export default UserContainer
