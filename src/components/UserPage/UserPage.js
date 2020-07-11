import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import { StyledButton, BlueButton, YellowButton } from "../Buttons/Button";
import "./UserPage.css";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <section className="welcomeCard">
      <h2 className="welcomeH2">
        Before you create your own bed, you'll need some resources and tools
      </h2>
      <label>Tools Required:</label>
      <ul>
        <li>Hammer</li>
        <li>Screws</li>
        <li>Shovel</li>
      </ul>
      <label>Resources Required:</label>
      <ul>
        <li>Access to Land</li>
        <li>Lumber to Build Beds</li>
        <li>Access to Soil</li>
      </ul>
      <YellowButton
        onClick={() => props.history.push("/vegetable-descriptions")}
      >
        Checkout Veggie Details
      </YellowButton>
      <StyledButton onClick={() => props.history.push("/create-garden")}>
        Get Started
      </StyledButton>
      <BlueButton onClick={() => props.history.push("/my-gardens")}>
        My Gardens
      </BlueButton>
      <LogOutButton />
    </section>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
