function Flower({ 
  name = "פרח כללי", 
  centerColor = "#2e7d32", 
  petalColor = "#a5d6a7" 
}) {

  const handleClick = () => {
    alert(`אני פרח מסוג ${name}`);
  };

  const cardStyle = {
    backgroundColor: petalColor,
    border: `4px solid ${centerColor}`,
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '180px',
    margin: '15px'
  };

  const titleStyle = {
    color: centerColor,
    backgroundColor: petalColor,
    margin: 0
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <h3 style={titleStyle}>{name}</h3>
    </div>
  );
}


export default Flower;