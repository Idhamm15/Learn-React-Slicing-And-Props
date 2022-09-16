import './Nav.css';

function Nav({title}) {
  return (
    <div id="nav">
      <div id="leftNav">
        <h2>{title}</h2>
      </div>
      <div id="rightNav">
        <a href="">Home</a>
        <a href="/binatang.html">Binatang</a>
        <a href="/about.html">About</a>
      </div>
    </div>
  )
}

export default Nav