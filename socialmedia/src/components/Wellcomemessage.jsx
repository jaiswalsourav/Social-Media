const WellcomeMessage = ({onGetPostServer}) => {
  return (<center className="well-come">
    <h1 >There is no post to show</h1>
    <button onClick={onGetPostServer} type="button" className="btn btn-primary">Get Post from server</button>
    </center>
  );
};

export default WellcomeMessage;