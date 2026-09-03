function Flower({ name,
    centerColor = "#8b4513", // ערך ברירת מחדל לצבע המרכז
    petalColor = "#ffe066"   // ערך ברירת מחדל לצבע עלי הכותרת
}) {



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