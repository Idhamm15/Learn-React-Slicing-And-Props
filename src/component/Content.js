import './Content.css'

function Content({animals}) {
  return (
    <div id="content">
      {
        animals.map((value, index) => (
          <div class="childContent">
            <h1>{value}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Content;