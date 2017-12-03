const React = require('react')
const ReactDOM = require('react-dom')
const Main = require('./main.jsx')
const Home = require('./home.jsx')
const FRContact = require('./frcontact.jsx')
const FRGoals = require('./frgoals.jsx')
const { hashHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
  } = require('react-router')

ReactDOM.render(
   <Router>
       <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="frcontact" component={FRContact}/>
        <Route path="frgoals" component={FRGoals}/>
       </Route>
   </Router>,
    document.getElementById('container')
)