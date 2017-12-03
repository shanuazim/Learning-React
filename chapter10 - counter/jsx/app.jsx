const React = require('react')
const ReactDOM = require('react-dom')
const CounterParent = require('./counterparent.jsx')

ReactDOM.render(
    <div>  
      <CounterParent/>
    </div>,
    document.getElementById('content')
)