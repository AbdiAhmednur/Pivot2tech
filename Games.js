
  function GameList(props){ 
    console.log(props)
    return(
        <div className= "contact-card">
        <img src={props.img} alt="game"/>
        <h3>{props.name}</h3>
        <div className="info">
        <p>developers: {props.Developers}</p>
        <p>type of game: {props.TypeOfGame}</p>
        </div>
        </div>
    );
  }



export default GameList;