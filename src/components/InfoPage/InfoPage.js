import React from "react";
import InputForm from "../InputForm/InputForm";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function InfoPage() {
  return <div>{InputForm()}</div>;
}
export default InfoPage;
