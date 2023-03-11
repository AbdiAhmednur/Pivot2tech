function Book(props) {

  return (
    <div className= "card">
      <img src={props.img} alt={props.book} />
      <h2>{props.book}</h2>
      <p>Author: {props.name}</p>
      <p>Year: {props.year}</p>
      <p>Country: {props.country}</p>
    </div>
  );
}

export default Book;


  