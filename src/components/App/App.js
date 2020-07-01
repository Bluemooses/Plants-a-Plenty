import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import GardenBed from "../GardenBed/GardenBed";
import UserGardens from "../UserGardens/UserGardens";
import EditPage from "../EditPage/EditPage";

import "./App.css";

import carrot from "../../images/carrot.png";
import bellPepper from "../../images/bell-pepper.png";
import lettuce from "../../images/lettuce.png";
import beans from "../../images/beans.png";
import peas from "../../images/peas.png";
import corn from "../../images/corn.png";
class App extends Component {
  state = {
    carrot: carrot,
    bellPepper: bellPepper,
    lettuce: lettuce,
    beans: beans,
    peas: peas,
    corn: corn,
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
    this.props.dispatch({ type: "GET_VEGGIES" });
    this.props.dispatch({
      type: "SET_VEGETABLE_BUTTON_PICTURES",
      payload: this.state,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={UserPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* <ProtectedRoute exact path="/info" component={InfoPage} /> */}
            <ProtectedRoute exact path="/dimensions" component={InfoPage} />
            <ProtectedRoute exact path="/create-garden" component={GardenBed} />
            <ProtectedRoute exact path="/edit-garden" component={EditPage} />
            <ProtectedRoute exact path="/my-gardens" component={UserGardens} />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
