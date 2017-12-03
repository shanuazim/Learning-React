const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./home.jsx')

const {
    Link,IndexLink
  } = require('react-router')
  

class Main extends React.Component{
    render(){
        return (
            <div>
                <h1>Northwestern Mutual</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/frcontact" activeClassName="active">FR Contacts</Link></li>
                    <li><Link to="/frgoals" activeClassName="active">FR Goals</Link></li>
                </ul>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = Main