function Card({name='Name', obj}) {
  
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/300x150"
        alt="Card"
        className="card-img"
      />

      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          {obj.name}
        </p>

        <button className="card-btn">Read More</button>
      </div>
    </div>
  );
}

export default Card;