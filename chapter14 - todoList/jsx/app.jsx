const React = require('react')
const ReactDOM = require('react-dom')
const TODOList = require('./todoList.jsx')

ReactDOM.render(
    <div>
        <TODOList/>
    </div>,
    document.getElementById('container')
)