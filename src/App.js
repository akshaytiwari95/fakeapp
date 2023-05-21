import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Header from './containers/Header';
import './App.css';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} /> // for homepage
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// ist product listing will be called and than inside it product component and on clicking the link product detail will be called 
// to connect react app with browser url we use browser router
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
Routes: It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
Relative s and s
Routes are chosen based on the best match instead of being traversed in order.
Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
BrowserRouter: Add BrowserRouter aliased as Router to your app.js file in order to wrap all the other components. BrowserRouter is a parent component and can have only single child.
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           </div>
       </Router>
   );
  }
}

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           </div>
       </Router>
   );
  }
}
Link: Let us now create links to our components. Link component uses the to prop to describe the location where the links should navigate to.
<div className="App">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
</div>
Now, run your application on the local host and click on the links you created. You will notice the url changing according the value in to props of the Link component.
 Route component will now help us to establish the link between component’s UI and the URL. To include routes to the application, add the code give below to your app.js.
<Route exact path='/' element={< Home />}></Route>
<Route exact path='/about' element={< About />}></Route>
<Route exact path='/contact' element={< Contact />}></Route>
Components are linked now and clicking on any link will render the component associated with it.
1.exact: It is used to match the exact value with the URL. For Eg., exact path=’/about’ will only render the component if it exactly matches the path but if we remove exact from the syntax, then UI will still be rendered even if the structure is like /about/10.
2. path: Path specifies a pathname we assign to our component.
3. element: It refers to the component which will render on matching the path.
Note: By default, routes are inclusive which means more than one Route component can match the URL path and render at the same time. If we want to render a single component, we need to use routes.

Routes: To render a single component, wrap all the routes inside the Routes Component.
<Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
</Routes>
Switch groups together several routes, iterates over them and finds the first one that matches the path. Thereby, the corresponding component to the path is rendered.


*/
