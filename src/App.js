import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import Nav from './components/Nav';
import whiskey from './whiskey.jpg'; 
import duke from './duke.jpg'; 
import perry from './perry.jpg'; 
import './App.css';

function App({ dogs }) {
  return (
    <div>
      <Router>
        <Nav dogs={dogs.map(dog => dog.name)} />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
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
        "To Duke ball is life.",
        "Duke loves snow, playing and eating it.",
        "Duke is great with other dogs :)"
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry? Perry the platypus?? Oh nevermind.",
        "Perry's official title is: Perry the Destroyer of Snacks.",
        "Perry hates the rain."
      ]
    },
  ]
};

export default App;
