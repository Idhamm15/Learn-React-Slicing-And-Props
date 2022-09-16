import './Foot.css';

function Foot(props) {
  const name = 'Riska';
  return (
    <div id="footer">
      <h1>created by: {`${name} dan ${props.created}`}</h1>
    </div>
  )
}

export default Foot;