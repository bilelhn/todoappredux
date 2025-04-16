import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/TodoList';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div>
      <Provider store={store}>
           <TodoList/>
      </Provider>
     
    </div>
  )
}

export default App
