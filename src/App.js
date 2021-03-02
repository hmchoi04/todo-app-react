import React, { Component, useState } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state= {
      newItem:"",
      list:[]
    }
  }
updateInput(key, value) {
  this.setState({
    [key]:value
  });
}

  addItem() {
    const item={
      id: 1 + Math.random(),
      value: this.state.item.slice()
    };
    const list = [...this.state.list];
    list.push(item);
    this.setState({
      list, 
      item:""
    });
  }

  deleteItem(id) {
    const list = [...list.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});

  }
  render() {
    return (
      <div className="App">
        <div>
          Add an Item
          <br/>
          <input
            type="text"
            placeholder="..."
            value={this.state.newItem}
            onChange = {e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
          {this.state.list.map(item => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>
                  X
                </button>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}

// function App() {



  // const [ toDoList, setToDoList ] = useState(data);

  // const handleToggle = (id) => {
  //   let mapped = toDoList.map(task => {
  //     return task.id === Number(id) ? { ...task, complete: !task.complete}: {...task};
  //   });
  //   setToDoList(mapped);
  // }
  // const handleFilter = () => {
  //   let filtered = toDoList.filter(task => {
  //     return !task.complete;
  //   });
  //   setToDoList(filtered);
  // }
  // const addTask = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
  //   setToDoList(copy);
  //   // copy.push({id: toDoList.lenght + 1, task: userInput, complete: false});
  // }
  // return (
  //   <div className="App">
  //     <Header/>
  //     <ToDoList toDoList = {toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
  //     <ToDoForm addtask={addTask}/>
  //   </div>
  // );
  
  
  

// }

export default App;
