import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListTodo from './ToDos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Home';
import {BrowserRouter ,Switch,Route,Link} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent/> */}
          
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo/>
            </Route>
        </Switch>
        </header>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>


    </BrowserRouter>
  );
}

export default App;
