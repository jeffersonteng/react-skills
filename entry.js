var ReactDOM = require('react-dom');
var React = require('react');
var data = require('./data.json');
var majors = require('./majors.json');
var Student = require('./Student.js');
var Major = require('./Major.js');
var List = require('./List.js');

ReactDOM.render(
    <List data={data} majors={majors}/>,
    document.getElementById('main')
);
