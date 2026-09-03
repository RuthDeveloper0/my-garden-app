import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';

function App() {
  return (
    <div>
      <Header />

      <main style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
        <Flower name="חמנית" centerColor="#8b4513" petalColor="#ffe066" />
        <Flower name="ורד" centerColor="#8b0000" petalColor="#ff4d4d" />
        <Flower />
      </main>
    </div>
  );
}

export default App;