import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Movies from './Components/Movies'
import DetailsPage from './Components/DetailsPage';

class App extends React.Component{
  render(){
    return (
    <div>
    <h1> Welcome to Movie Wall </h1>
    <BrowserRouter >
    <Route path ="/" component={Movies} exact={true}/>
    <Route path ="/:movieName" component={DetailsPage} />
    </BrowserRouter>
    </div>
   );
  }
}

export default App;
