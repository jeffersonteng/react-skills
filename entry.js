var ReactDOM = require('react-dom');
var React = require('react');
var data = require('./data.json');
var Student = require('./Student.js');

ReactDOM.render(
  (
    <div>
      {data.map((student) => {
          return <Student key={student.id} student={student}/>
      })}
    </div>
  ),
  document.getElementById('example')
);

