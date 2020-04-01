import React, { Component } from 'react';
import Todos from './components/Todos';
import {
      Alert,
      Form,
      InputGroup,
      Button,
      FormControl,
      Badge,
      } from 'react-bootstrap';

      import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
      state = {
            todos: [],
            todo: '',
            show: false
      }

      handleShow = () => {
            this.setState({show: !this.state.show});
      }

      set = e => {
            this.setState({todo: e.target.value})
      }
      add = () => {
            const todos = [...this.state.todos];
            const todo = {
                  id: Math.floor(Math.random() * 100000),
                  theTodo: this.state.todo
            }

            if(todo.theTodo !== "" && todo.theTodo !== " ") {
                  todos.push(todo);
                  this.setState({todos, todo:''});
                  toast.success("New Todo added successfully!");
            }
      }

      handleDelete = id => {
            const todos = [...this.state.todos];
            const f = todos.filter(t => t.id !== id);
            this.setState({todos: f});

            const findeIndex = todos.findIndex(t => t.id === id);
            const todo = todos[findeIndex];
            toast.error(`#${todo.id} deleted succesfully!`);
      }
      handleEdit = (e, id) => {
            const {todos: allTodos} = this.state;
            const findeIndex = allTodos.findIndex(t => t.id === id);
            const todo = allTodos[findeIndex];
            todo.theTodo = e.target.value;
            const todos = [...allTodos];
            todo[findeIndex] = todos
            this.setState({todos})
      }
      handleSubmit = e => {
            e.preventDefault();
      }
      render() {
            const {todos, show} = this.state;

            const btnColor = show ? 'outline-danger' : 'outline-primary';
            const btnIcon = show ? 'fa fa-arrow-up' : 'fa fa-arrow-down';

            let todo = null;
            let badgeColor = '';
            const todosCount = todos.length;

            if(todosCount >= 7) badgeColor = "success";
            if(todosCount <= 6) badgeColor = "warning";
            if(todosCount <= 2) badgeColor = "danger";

            if(show) {
                  todo = <Todos todos={todos} deleted={this.handleDelete} edited={this.handleEdit}/>
            }
            return (
                  <div className="text-center">
                        <Alert variant="info">
                              <Alert.Heading>TODO APP</Alert.Heading>
                              <hr />
                              <div>
                                    <h6>
                                          WE HAVE
                                                <Badge pill variant={`${badgeColor}`} className="m-1">
                                                      {todosCount}
                                                </Badge>
                                          TODOS
                                    </h6>
                              </div>
                        </Alert>
                        <div className="mt-3">
                              <Form className="mb-4 mt-5 d-flex justify-content-center"
                              onSubmit={this.handleSubmit}>
                                    <InputGroup className="w-50">
                                          <FormControl
                                                type="text"
                                                placeholder="Add Todos"
                                                onChange={this.set}
                                                value={this.state.todo}
                                          />
                                          <InputGroup.Append>
                                                <Button variant="outline-info"
                                                      className="fa fa-plus"
                                                      type="submit"
                                                      onClick={this.add} />
                                          </InputGroup.Append>
                                    </InputGroup>
                              </Form>
                              <Button variant={btnColor}
                                    className={`${btnIcon}`}
                                    onClick={this.handleShow} />
                              {todo}
                        </div>
                        <ToastContainer/>
                  </div>
            );
      }
}

export default App;
