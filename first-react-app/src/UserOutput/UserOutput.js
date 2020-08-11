import React from 'react'

function UserOutput(props) {
    return (
        <div>
            <p>Hi there</p>
            <p>Hello {props.username}</p>
        </div>
    )
}

export default UserOutput
