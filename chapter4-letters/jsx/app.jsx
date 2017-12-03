const ReactDOM = require('react-dom')
const React = require('react')

class Letter extends React.Component{
    render(){
        var letterStyle = {
            padding: 30,
            margin: 10,
            backgroundColor: this.props.bgColor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: "100",
            textAlign: "center"
        };
        return (
            <div style={letterStyle}>
                {this.props.children}
            </div>
        )
    };
}
    ReactDOM.render(
        <div>
            <Letter bgColor="#58B3FF">A</Letter>
            <Letter bgColor="#FF605F">E</Letter>
            <Letter bgColor="#FFD52E">I</Letter>
            <Letter bgColor="#49DD8E">O</Letter>
            <Letter bgColor="#AE99FF">U</Letter>
        </div>,
        document.getElementById('content')
    )

