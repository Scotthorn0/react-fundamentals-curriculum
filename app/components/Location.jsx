var React = require('react')

var Location = (props) => {
  return (
    <div className="local" onClick={ event => {props.clickHandler(event, props.local)}}>{props.local}</div>
  )
}

module.exports = Location;
