import React from 'react';
import Header from './Header';
import Footer from './footer';
import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
     <br /> 
     <br /> 
      <h1>Fun Facts about about React</h1>
      <ul>
      <p>reason I <em>❤</em> React</p>
      <li>it's composable</li>
      <li>it's declarative</li>
      <li>it's a hireable skill</li>
      <li>it's actively maintained by skilled people</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;

// ReactDom.render(<h1>Hello Everyone</h1>, document.getElementBid ("root"))

//use component as much as you can

// there is also a <Fragment> which is an alternative to the div in react 

// look into es6

/* const page = (
  <div>
  <h1>my awesome website in react</h1>
  </div>
)*/

// look into a declarative and imperative in react most people use declarative 

// custom components are sections of websites put together  

//

