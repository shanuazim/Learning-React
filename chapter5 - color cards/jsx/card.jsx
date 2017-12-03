const React = require('react')
const ReactDOM = require('react-dom')
const Square = require('./square.jsx')
const Label = require('./label.jsx')

class Card extends React.Component{
    render(){
        var cardStyle = {
          height:200,
          width:150,
          padding:0,
          backgroundColor:"#00ff00",
          WebKitFilter:"drop-shadow(0px 0px 5px #666)",
          filter:"drop-shadow(0px 0px 5px #666)"
        }
        return(
            <div style ={cardStyle}>
              <Square color={this.props.color}/>
              <Label color={this.props.color}/>
            </div>
        );
    }
}

module.exports = Card