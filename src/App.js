import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Container from "./components/Container";
import Hero from "./components/Hero";
import FemaleIcons from "./components/FemaleIcons";
import Helpfulness from "./components/Helpfulness";
import Groups from "./components/Groups";
import AboutAuthor from "./components/AboutAuthor";
import ReviewList from "./components/ReviewList";
import Qa from "./components/Q&A";
import Video from "./components/VideoFragment";
import SectionForm from "./components/SectionForm";
import Dropdown from "./components/Dropdown";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

import groups from "./groupText.json";
import reviews from "./reviews.json";
import initialTodos from "./todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const { deleteTodo, formSubmitHandler } = this;

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <Header />
        <main>
          <Hero />
          <Container>
            <div className="background">
              <FemaleIcons />
              <Helpfulness />
            </div>
            <Groups groups={groups} />
          </Container>
          <AboutAuthor />
          <Container>
            <ReviewList items={reviews} />
          </Container>
          <Qa />
          <Container>
            <ToDoList todos={todos} onDeleteTodo={deleteTodo} />
            <p>Общее количество заметок: {totalTodoCount}</p>
            <p>Количество выполненных: {completedTodoCount}</p>
            <Video />
            <Dropdown />
            <SectionForm onSubmit={formSubmitHandler} />
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
