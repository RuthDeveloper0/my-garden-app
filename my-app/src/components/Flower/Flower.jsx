function Flower() {
  const name = "חמנית";
  const centerColor = "#8b4513";
  const petalColor = "#ffe066";

  const cardStyle = {
    backgroundColor: petalColor,
    border: `4px solid ${centerColor}`,
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '180px',
    margin: '15px',
    cursor: 'pointer'
  };

  const titleStyle = {
    color: centerColor,
    margin: 0
  };

  const handleClick = () => {
    alert(`לחצת על ${name}!`);
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <h3 style={titleStyle}>{name}</h3>
    </div>
  );
}

export default Flower;