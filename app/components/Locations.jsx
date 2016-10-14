var React = require('react')
var Location = require('./Location.jsx')


var Locations = (props) => {
  var locs = props.locals.map( local => <Location local={local} clickHandler={props.clickHandler} />)

  return (
    <div className="location">
      {locs}
    </div>
  )
}


module.exports = Locations;
