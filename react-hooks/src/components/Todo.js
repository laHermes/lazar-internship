import React from 'react'

function Todo(props) {
    return (
        <div>
            <input onChange={props.change} type="text" />
            <button disabled={!props.value} type="button" onClick={props.click} >Add me</button>
        </div>
    )
}

export default Todo
