import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarShips from './pages/StarShips/StarShips'
import StarShipPage from './pages/StarShipPage/StarShipPage';

function App() {
  return (
    <>
      <h1>Star Wars StarShips</h1>
      <Routes>
        <Route 
          path='' 
          element={<StarShips />}
        />
        <Route 
          path='starships/:id' 
          element={<StarShipPage />}
        />
      </Routes>
    </>
  );
}

export default App;
