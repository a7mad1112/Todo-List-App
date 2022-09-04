import React, {Component} from 'react';
import ToDoItems from './component/todoItems/todoItems';
import AddItem from './component/AddItem/AddItem';
class App extends Component {
  state = {
    items: [
      {id: 1, name: 'Hamza', age: 22},
      {id: 2, name: 'Mohamed', age: 23},
      {id: 3, name: 'Ahmed', age: 24}
    ]
  };
  deleteItem = id => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    this.setState({items: items});
  };
  addItem = item => {
    item.id = Math.random()
    let items = this.state.items
    items.push(item)
    this.setState({items})
  }
  render(){
    return (
      <div className='App container'>
        <h1 className='text-center'>Todo list</h1>
        <ToDoItems items = {this.state.items} deleteItem = {this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
};
export default App;