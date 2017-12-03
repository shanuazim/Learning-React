const React = require('react')
const ReactDOM = require('react-dom')

class TODOItems extends React.Component{
    render(){
        var todoEntries = this.props.entries;
        function createTasks(items){
            return<li key ={items.key}>{items.text}</li>
        }
        var listItems = todoEntries.map(createTasks)
        return(
            <ul className = "theList">
                {listItems}
            </ul>
        )
    }
}

module.exports = TODOItems