import './app.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import {
  TransitionGroup,
  CSSTransition,
  Transition,
} from 'react-transition-group';

import Contact from './components/navbar/Contact';
import CV from './components/pages/CV';
import Fresnes from './components/pages/Fresnes';
import Theatre from './components/pages/Theatre';

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <Router>
          <NavBar />
          <Contact />
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
                        render={(props) => <Fresnes {...props} color="red" />}
                      />
                      <Route
                        exact
                        path="/theatre"
                        render={(props) => <Theatre {...props} color="blue" />}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
