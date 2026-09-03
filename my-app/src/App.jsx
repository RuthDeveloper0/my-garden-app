import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {

  const flowers = [
    { id: 1, name: "חמנית", centerColor: "#8b4513", petalColor: "#ffe066" },
    { id: 2, name: "כלנית", centerColor: "#2b2b2b", petalColor: "#ff4d4d" },
    { id: 3, name: "חרצית", centerColor: "#d4a373", petalColor: "#ffffff" }
  ];


  return (
    <div>
      <Header />
      <main style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {flowers.map((flower) => (
          <Flower
            key={flower.id}
            name={flower.name}
            centerColor={flower.centerColor}
            petalColor={flower.petalColor}
          />
        ))}
      </main>
    </div>
  );
}

export default App;