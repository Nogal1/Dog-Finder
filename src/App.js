import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";
import Nav from "./components/Nav";
import whiskey from 'public/whiskey.jpg';
import duke from 'public/duke.jpg';
import perry from 'public/perry.jpg';

function App({ dogs }) {
  return (
    <div>
      <Router>
        <Nav dogs={dogs.map(dog => dog.name)} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
            </Route>
          <Route path="/dogs.:name">
            <DogDetails dogs={dogs} />
            </Route>
          <Redirect to="/dogs" />    
        </Switch>
      </Router>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves popcorn.",
        "Whiskey is a terrible guard dog :)",
        "Whiskey loves to cuddle!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "To Duke, ball is life.",
        "Duke loves the snow!",
        "Duke is super friendly with other dogs :)"
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry adores all people :)",
        "Perry's title is: Perry the Infinite Snack Destroyer.",
        "Perry hates the rain."
      ]
    },
  ]
};

export default App;