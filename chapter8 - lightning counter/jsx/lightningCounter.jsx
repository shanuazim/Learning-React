const React = require('react')
const ReactDOM = require('react-dom')

class LightningCounter extends React.Component{
    constructor(props) {
    super(props);
    this.state = {strikes: 0}
    }

    timerTick(){
        this.setState({
            strikes:this.state.strikes + 100
        })
    }
   
    componentDidMount(){
       setInterval(this.timerTick.bind(this),1000)
    }

    render(){
        var counterStyle ={
            color: "#66FFFF",
            fontSize: 50
        }

        var count = this.state.strikes.toLocaleString()

        return(
            <h1 style={counterStyle}>{count}</h1>
        )
    }
}

module.exports = LightningCounter