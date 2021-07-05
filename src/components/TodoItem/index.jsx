import React from 'react'
// import { useState } from 'react'
import { toggle_todo, delete_todo} from '../../store/actions/todoList'
import { useDispatch } from 'react-redux'

const TodoItem = ({ todo, id}) => {

    const dispatch = useDispatch()

    return (
        <div 
          style={
              { ...styles, 
                textDecoration: todo.complete ? 'line-through' : 'none' 
              }
              
              }>
            <span>{todo.text}</span>
            <button onClick={() => delete_todo(id)}>delete</button>
            <button onClick={() =>dispatch(toggle_todo(id))}>complete</button>
        </div>
    )
}

const styles = {
    display: 'flex',
    justifyContent: 'space-between'
}
export default TodoItem

