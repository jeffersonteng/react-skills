var React = require('react');

var Major = React.createClass({
  handleClick: function(major) {
    this.props.onMajorClick(major);
  },

  render: function() {
    var { major } = this.props;
    return <div onClick={this.handleClick.bind(this, major)}>{major}</div>;
  }
});

module.exports = Major;
