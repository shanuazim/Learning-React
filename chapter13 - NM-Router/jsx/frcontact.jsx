const React = require('react')
const ReactDOM = require('react-dom')

class FRContact extends React.Component{
   render(){
       return(
           <div>
               <h2>FR Contact</h2>
               <table>
                   <th>FR Name</th>
                   <th>Network Office</th>
                   <th>City</th>
                   <tr>
                      <td>Tom Holter</td>
                      <td>Holter Network Office</td>
                      <td>Milwaukee</td>
                   </tr>
                   <tr>
                      <td>Azim Siddique</td>
                      <td>Azim Network Office</td>
                      <td>Milwaukee</td>
                   </tr>
                   <tr>
                      <td>Sophia Azim</td>
                      <td>Azim Network Office</td>
                      <td>Milwaukee</td>
                   </tr>
                   <tr>
                      <td>Atif Azim</td>
                      <td>Azim Network Office</td>
                      <td>Milwaukee</td>
                   </tr>
                </table>
            </div>
       )
   }
}

module.exports = FRContact