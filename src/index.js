//import react
import React from 'react';
import ReactDOM from 'react-dom';
//import css
import './index.css';


//creates todo class
class Todos extends React.Component {
//constructor
  constructor(props) {
    super(props);
    //creates a state for todos and toAdd
    this.state = {
      todos: [],
      toAdd: "",
      completed: []
    };
    //binds "this" to be used elsewhere in the constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.clearTask = this.clearTask.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
    this.onAddSubmitHandler = this.onAddSubmitHandler.bind(this);
  }
  //handles change when input text is typed
  handleChange(e){
    this.setState({toAdd: e.target.value});
  }
//handles submit button pressed
  handleSubmit(e){
    e.preventDefault();
    let todoList = this.state.todos.slice();
    console.log(this.state.toAdd)
    todoList.push(this.state.toAdd)
    //this.setState({todos: todoList});
    this.setState({toAdd: null});
    document.getElementById("textInput").value = "";
    this.onAddSubmitHandler(todoList);
  }
  //clears the list
  clearList(e){
    //sets empty list
    let nullTodo = [];
    //sets state of todo array
    this.setState({todos: nullTodo});
    return ([])
  }
  clearComplete(e){
    let nullComplete = [];
    this.setState({completed: nullComplete});
  }
  //clears individual tasks
  clearTask(position, e){
    //gets the list of completed tasks
    let completedList = this.state.completed.slice();
    //gets the list of todos
    let todoList = this.state.todos.slice();
    //parses through todolist to find what tasks to "complete"
    for (let i=0; i<todoList.length +1; i++){
      if (todoList[i] === position) {
        //removes completed tasks from todo list
        todoList.splice(i, 1);
        //pushes completed tasjs to completed list
        completedList.push(position);
      }
    }
    //sets the state of todolist and completed list
    this.setState({todos: todoList});
    this.setState({completed: completedList});

  }
  callAPI(){
    //get request
    console.log('calling API get');
    fetch('http://localhost:8080')
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => {
        //receives information froms server
        console.log('recieved', res)
        this.setState({todos: res.todos})
      })
      .catch(err => err)
  }
  componentDidMount(){
    this.callAPI();
  }

  onAddSubmitHandler(todoList){
    //post request
    console.log("submitting", todoList)
    fetch('http://localhost:8080',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      //adds item to list
      body: JSON.stringify({
        'todos' : todoList,
      }),})
    .then(res => this.callAPI())
    // .then(res => this.setState({todos: res}))
  }
  // NOTE: form code that I replaced with buttons
  //___________________________________________
  // <form id="submitter" onSubmit={this.handleSubmit}>
  //   <label id="addLabel">
  //     Add Todo:
  //     <input
  //       value={this.state.value}
  //       onChange={
  //         e => this.handleChange(e)
  //       }
  //     />
  //
  //     </label>
  //     <button id="add" type="submit">Add</button>
  // </form>
  //___________________________________________

  render() {
    //creates list with position (dictionary)
    let listTodo = this.state.todos.map((position) => {
      return (
        <li key = {position}>
          {position}
          <button id="clearTask" type="submit" onClick={() => this.clearTask(position)}></button>
        </li>

      )});
    let completedList_final = this.state.completed.map((position) => {
      return (
        <li key = {position}>
          {position}
        </li>
      )
    })

    return (
        <div>
        <h1> Todo List</h1>
        <h2 id="aLabel"> Add Todo</h2>
        <input
          id = "textInput"
          value={this.state.value}
          onChange={
            e => this.handleChange(e)
          }
        />
        <button id="add" type="submit" onClick={this.handleSubmit}>Add</button>
        <button type="submit" id="cleartest" onClick={this.clearList}>Clear</button>


        <h2 id="listTitle">Todo</h2>
        <ol id='taskList'>
          {listTodo}
        </ol>
        <div id='completePackage'>
        <h2 id="completedTitle">Completed</h2>
        <button type="submit" id="clearComplete" onClick={this.clearComplete}>Clear</button>
        </div>
        <ol id='completedList'>
          {completedList_final}
        </ol>



        </div>
      );
  }
}




class Reminder extends React.Component {
  render() {
    return (
      <div>
          <Todos />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Reminder />,
  document.getElementById('root')
);
