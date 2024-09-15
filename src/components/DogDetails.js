import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} width="300" />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <a href="/dogs">Back to all dogs</a>
    </div>
  );
}

export default DogDetails;