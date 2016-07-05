var React = require('react');

var Major = React.createClass({
  render: function() {
    var { major } = this.props;
    return <div>{major}</div>;
  }
});

module.exports = Major;
