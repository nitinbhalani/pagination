import React from 'react'

const Newsitem = (props) => {
  return (
    <div>

<div className="card" >
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">
      {props.description}
    </p>
    <a href={props.url} className="btn btn-primary">
      Read more
    </a>
  </div>
</div>



    </div>
  )
}

export default Newsitem