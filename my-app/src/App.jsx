import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Flower
          name="חמנית"
          centerColor="#8b4513"
          petalColor="#ffe066"
        />
        <Flower 
          name="כלנית" 
          centerColor="#2b2b2b" 
          petalColor="#ff4d4d" 
        />
        <Flower 
          name="חרצית" 
          centerColor="#d4a373" 
          petalColor="#ffffff" 
        />
      </main>
    </div>
  );
}

export default App;