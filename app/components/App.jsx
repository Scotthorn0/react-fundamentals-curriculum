var React = require('react');
var Locations = require('./Locations.jsx');

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      data: ['Galaxy', 'World', '\'Merca', 'Texas', 'Austin'],
      current: 'Galaxy'
    };
  }

  onClick(event, place) {
    this.setState({current: place});
  }

  render() {
    return (
      <div>
        <div className="talker">Hello {this.state.current} </div>
        <div className="locations"><Locations locals={this.state.data} clickHandler={this.onClick.bind(this)} /></div>
      </div>
    )
  }
}


module.exports = App;
