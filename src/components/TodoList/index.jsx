import React from 'react'
import {useState} from 'react'
import TodoItem  from '../TodoItem'
import {add_todo} from '../../store/actions/todoList'
import { useDispatch, useSelector} from 'react-redux'


const TodoList = () => {
    
    // console.log(state)

    const [inputValue, setInputValue] = useState('')

    const state = useSelector(state => state.todolist)

    const dispatch = useDispatch()
    
    return (
        <div style={styles}>
            <div>
                <input type="text" 
                placeholder="type smth..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => dispatch(add_todo(inputValue))}>Add</button>
            </div>
            <ul>
                {
                    state.map((todo, id) => {
                        return <TodoItem todo={todo} id={id} key={id}/>
                    })
                }
            </ul>
        </div>
    )
}

const styles = {
    width: '300px',
    margin: '0 auto'
}

export default TodoList

