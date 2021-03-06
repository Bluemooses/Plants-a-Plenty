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
import EditPage from "../EditPage/EditPage";

import "./App.css";
import GardenComplete from "../GardenComplete/GardenComplete";
import UserEntryPage from "../UserEntryPage/UserEntryPage";
import AllGardens from "../AllGardens/AllGardens";
import CurrentGardenBed from "../CurrentGardenBed/CurrentGardenBed";
import VeggieDescriptions from "../VeggieDescriptions/VeggieDescriptions";
import Background from "../../images/green.jpg";

class App extends Component {
  componentDidMount() {
    this.loadDb();
  }

  loadDb = () => {
    this.props.dispatch({ type: "FETCH_USER" });
    this.props.dispatch({ type: "GET_VEGGIES" });
    this.props.dispatch({
      type: "GET_VEGETABLE_BUTTON_PICTURES",
    });
    this.props.dispatch({
      type: "GET_GARDEN_BEDS",
    });
  };

  render() {
    return (
      <div styles={{ backgroundImage: `${Background}` }}>
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
              <ProtectedRoute exact path="/my-gardens" component={AllGardens} />
              <ProtectedRoute exact path="/edit-garden" component={EditPage} />
              <ProtectedRoute
                exact
                path="/current-garden"
                component={CurrentGardenBed}
              />
              <ProtectedRoute
                exact
                path="/create-garden"
                component={UserEntryPage}
              />
              <ProtectedRoute
                exact
                path="/garden-created"
                component={GardenComplete}
              />
              <Route
                exact
                path="/vegetable-descriptions"
                component={VeggieDescriptions}
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
