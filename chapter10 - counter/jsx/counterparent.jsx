const React = require('react')
const ReactDOM = require('react-dom')
const Counter = require('./counter.jsx')

class CounterParent extends React.Component{
  
  constructor(props){
      console.log("inside Counter Parent")
      super(props)
      this.state = {count:0}
      this.increase = this.increase.bind(this)
     
  }
 
  increase(e){
    console.log("Counter increased")
      var currentCount = this.state.count

      if(e.shiftKey){
          currentCount += 10
      }else{
        currentCount += 1
      }

      this.setState({
          count: currentCount
      })
  }
  
  render(){
      var bgStyle = {
          padding: 50,
          backgroundColor: "#FFC53A",
          width: 250,
          height: 100,
          borderRadius: 10,
          textAlign: "center"
      }
      var btnStyle = {
          fontSize: "lem",
          width: 30,
          height: 30,
          fontFamily: "sans-serif",
          color: "#333",
          fontWeight: "bold",
          lineHeight: "3px"
      }
      return (
          <div style={bgStyle}>
            <Counter display={this.state.count}/>
            <button onClick={this.increase} style = {btnStyle}>+</button>
          </div>
        )
  }

}

module.exports = CounterParent