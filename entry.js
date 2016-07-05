var ReactDOM = require('react-dom');
var React = require('react');
var data = require('./data.json');
var majors = require('./majors.json');
var Student = require('./Student.js');
var Major = require('./Major.js');

ReactDOM.render(
    <div>
      {majors.map((major) => {
          return <Major key={major} major={major}/>
      })}
    </div>,
    document.getElementById('majors')
);

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
