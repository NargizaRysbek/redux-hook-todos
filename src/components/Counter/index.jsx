import React from 'react'
import { increaseCount, decreaseCount } from '../../store/actions/index'
// import { useStore } from 'react-redux'
import { useSelector, useDispatch, useStore } from 'react-redux'


const Counter = () => {

    const counterData = useSelector(state => state.counter)
    console.log(counterData)

    const dispatch = useDispatch()

    const store = useStore()
    // console.log(store.dispatch(decreaseCount())) равна  12  23
    


    // const store = useStore()
    // console.log(store)

    return (
        <div>
            <button onClick={() => dispatch(decreaseCount())}>-</button>
            {counterData.count}
            <button onClick={() => dispatch(increaseCount())}>+</button>
        </div>
    )
}


export default Counter