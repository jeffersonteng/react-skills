var React = require('react');
var Major = require('./Major.js');
var Student = require('./Student.js');

var List = React.createClass({
  handleClick: function(major) {
    console.log('hello: ' + major);
  },

  render: function() {
    var { majors, data } = this.props;

    return (<div>
      {majors.map((major) => {
          return <Major key={major} major={major}/>;
      })}

      {data.map((student) => {
          return <Student key={student.id} student={student}/>
      })}
    </div>);
  }
});

module.exports = List;
