const React = require('react')
const ReactDOM = require('react-dom')

class Home extends React.Component{
   render(){
       return(
           <div>
               <h2>Home Page</h2>
               <p> As a mutual company, we report to you, not Wall Street. 
                   And every decision we make is guided by our mutual values: 
                   doing right by our clients, keeping our promises, and providing 
                   the greatest value at the lowest cost. That means when we do well,
                    you do well, too. We lead the industry in giving back to our 
                    policyowners — issuing dividends every year since 1872, even 
                    during the Great Recession. Here are some more reasons why millions 
                    of people put their trust in Northwestern Mutual.
                </p>
            </div>
       )
   }
}

module.exports = Home