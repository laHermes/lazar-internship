import React from 'react'

function Header(props) {
    return (
        <header>
        <button onClick={props.onLoadAuth}>Auth</button> |  <button onClick={props.onLoadTodo}>Todo</button>
    </header>
    )
}

export default Header
