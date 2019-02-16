// initialize react here
import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';

import List from './components/List';

class App extends React.Component {
  /* constructor (props){
    super(props);

    this.state = {
      list: [],
      newItem: '',
    };
  } */

  state = {
    list: [
      {
        title: 'learn react',
        done: false,
      },
    ],
    newItem: '',
  };

  handleNewItemChange = e =>
    this.setState({
      newItem: e.target.value,
    });

  handleAddNewItem = () => {
    const { list, newItem } = this.state;

    list.push({
      title: newItem,
      done: false,
    });

    this.setState({
      list,
      newItem: '',
    });
  };

  updateItem = (index, done) => {
    const { list } = this.state;

    list[index].done = done;
    this.setState({ list });
  };

  render() {
    const { list, newItem } = this.state;

    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <List items={list} updateItem={this.updateItem} />
        <input type="text" value={newItem} onChange={this.handleNewItemChange} />
        <button onClick={this.handleAddNewItem}>Add New</button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
