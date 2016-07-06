var React = require('react');
var Major = require('./Major.js');
var Student = require('./Student.js');

var List = React.createClass({
  getInitialState: function() {
    return { selectedMajor: null };
  },

  handleMajorClick: function(major) {
    this.setState({ selectedMajor: major });
  },

  render: function() {
    var { majors, data } = this.props;

    return (<div>
      {majors.map((major) => {
          return <Major key={major} major={major} onMajorClick={this.handleMajorClick}/>;
      })}

      {data.filter((student) => { 
        return student.major === this.state.selectedMajor;
      }).map((student) => {
        return <Student key={student.id} student={student}/>
      })}
    </div>);
  }
});

module.exports = List;
