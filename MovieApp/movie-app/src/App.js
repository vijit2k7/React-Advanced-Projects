import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import A from "./components/A";
import "./App.css";
import {useState,useReducer} from 'react';
import "./lib/font-awesome/css/all.min.css";

export const WatchListContext=React.createContext();

function reducer(state,action,payload){
  switch (action.type){

    case 'ADD_MOVIE_WATCHLIST':
      console.log("in add movie",state);
      return state
    default:
      return state
  }

}

function App() {
  const initialState={
    watchList:[]
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("In app js");
  return (
    <WatchListContext.Provider value={{state,dispatch}}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">        
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>    
        </Switch>
      </Router>
    </WatchListContext.Provider>
  );
}

export default App;