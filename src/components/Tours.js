function Tours(props) {
  return (
    <div>
      {props.ArrayData.map((item, i) => {
        return (
          <div key={item.id}>
            <hr></hr>
            <h1>{item.name}</h1>
            <img src={item.image} />
            <br></br>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
export default Tours;
