import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'
import articles from './data'

class App extends React.Component{
    render(){    
        return(
            <div>
          <Header />
          {console.log(articles)}
          <section className="hero">
            <div className="container">
              <h2 className="heading"> Hero Section </h2>  
            </div>
          </section>
          
          <section className="article">
          <div className="container">
              <h2 className="heading">Articles</h2>
              <div className="grid">
              {articles.map(a=>{
                   return<div className="grid-box"> <h2 className="heading">{a.title}</h2>
                   <img src={a.urlToImage}/><br/>
                   </div>   
          })}
          </div>
        </div>
    </section>             
        </div>
        )
    }
}

ReactDOM.render( <App />, document.getElementById('root'))

export default App