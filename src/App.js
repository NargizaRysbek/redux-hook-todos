import './App.css';
import React, {useState} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/index'
// import TodoItem from './components/TodoItem';
import  TodoList  from './components/TodoList';
import Counter from '../src/components/Counter/index';
// import {Auth} from './components/Auth'
import TodoItem from './components/TodoItem';
// import Login from './components/Login';

const store = createStore(rootReducer) // вместо root можно писать один редюсер

function App() {

  // const [switchComponent, setSwitchComponent] = useState(false)
 
  return (
    <Provider store={store}>
        {/* <button style={{marginBottom: 20}} onClick={() => setSwitchComponent(!switchComponent)}>switch</button>

        {
            switchComponent ? <Counter/> : <TodoList/>
        }  */}
      {/* <Auth/> */}
      {/* <Login/> */}

      {/* <Counter/> */}
      <TodoList/>
    </Provider>
    

  );  
}

export default App;
