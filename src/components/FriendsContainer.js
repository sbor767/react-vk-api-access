import React from 'react'

const FriendsContainer = ({ friends }) => {
    return (
        <div id='FriendsContainer' className='inner-container'>
            <h3>Your friends (up to 5):</h3>
            {friends.length === 0 ? (
                <div>No friends!</div>
            ) : (
                <ul>
                    {friends.map((friend, i) => (
                        <li key={i}>{friend.first_name} {friend.last_name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default FriendsContainer
