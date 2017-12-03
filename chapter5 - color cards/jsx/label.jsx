const React = require('react')
const ReactDOM = require('react-dom')

class Label extends React.Component{
    render(){
       var labelStyle={
           fontFamily: "sans-serif",
           fontWeight: "bold",
           padding:13,
           margin:0
       }
       return(
           <p style={labelStyle}>{this.props.color}</p>
       )
    }
}

module.exports = Label