import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './pages/Navbar';
import './App.css';

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/experience">
          <ExperiencePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
