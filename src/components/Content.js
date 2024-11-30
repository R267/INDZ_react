import React, { useState, useEffect } from 'react';
import { fetchDogBreeds } from './api';
import Breed from './Breed';
import './Content.css';
import UserForm from './UserForm'; // Імпорт компонента UserForm

const Content = ({ title }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBreeds = async () => {
    setLoading(true);
    const breedsData = await fetchDogBreeds();
    setBreeds(breedsData);
    setLoading(false);
  };

  // Виконується один раз при першому рендері
  useEffect(() => {
    loadBreeds();
  }, []);

  return (
    <main className="content">
      <h1>{title}</h1>
      <button onClick={loadBreeds}>Reload Breeds</button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {breeds.map((breed) => (
            <Breed key={breed} breed={breed} />
          ))}
        </ul>
      )}

      {/* Вбудовуємо UserForm */}
      <section className="user-form-section">
        <h2>User Form</h2>
        <UserForm />
      </section>
    </main>
  );
};

export default Content;
