import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Home} from 'src/Routes';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
