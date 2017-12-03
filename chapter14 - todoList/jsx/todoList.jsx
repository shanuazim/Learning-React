const React = require('react')
const ReactDOM = require('react-dom')
const TODOItems = require('./todoItems.jsx')
class TODOList extends React.Component{
    constructor(props){
        super(props)
        this.state ={items:[]}
        this.addItem = this.addItem.bind(this)
    }
    addItem(e){
     var itemArray = this.state.items;

     itemArray.push({
         text:this._inputElement.value,
         key: Date.now()
     })
     this.setState({
         items: itemArray
     })
     this._inputElement.value =""
     e.preventDefault()
    }
    render(){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit={this.addItem}>
                       <input ref={(a) =>this._inputElement = a} placeholder = "enter task">
                       </input>
                       <button type = "submit">add</button>
                    </form>
                </div>
                <TODOItems entries={this.state.items}/>
            </div>
        )
    }
}

module.exports = TODOList