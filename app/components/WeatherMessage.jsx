var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {isLoading, temp, location} = this.props;
    return (
      <div>
        <p>It is {temp} in {location}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
