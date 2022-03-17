import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarShips from './components/StarShips/StarShips'
import StarShipPage from './pages/StarShipPage/StarShipPage';
import PilotList from './components/PilotList/PilotList';

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
        <Route 
          path='starships/:id' 
          element={<PilotList />}
        />
      </Routes>
    </>
  );
}

export default App;
