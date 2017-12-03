const React = require('react')
const ReactDOM = require('react-dom')

class Counter extends React.Component{
    render(){
        console.log("inside Counter")
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        }

        return(
            <div style = {textStyle}>
              {this.props.display}
            </div>
        )
    }
}
module.exports = Counter