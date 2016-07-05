var React = require('react');

var Student = React.createClass({
  render: function() {
    var { student } = this.props;
    return <h1>{student.first_name} {student.last_name} {student.email} {student.major} </h1>;
  }
});

module.exports = Student;
