import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

export default function App() {
  return (
    <div>
      <Navbar />
      <MovieList />
    </div>
  );
}
