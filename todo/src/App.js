import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
class App extends Component {


  render() {
    return (
      <div className="App">
      <TodoForm />
      <Todos />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps, )(App);
