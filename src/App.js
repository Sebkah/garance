import './app.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  TransitionGroup,
  CSSTransition,
  Transition,
} from 'react-transition-group';

import CV from './components/pages/CV';
import Page from './components/pages/Page';
import Theatre from './components/pages/Theatre';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  in={false}
                  key={location.key}
                  timeout={200}
                  classNames="my-node"
                >
                  <Switch location={location}>
                    <Route exact path="/cv" component={CV} />

                    <Route
                      exact
                      path="/fresnes"
                      render={(props) => <Page {...props} />}
                    />
                    <Route
                      exact
                      path="/theatre"
                      render={(props) => <Theatre {...props} />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </div>
  );
}

export default App;
