/* eslint-disable react/no-unused-state */
import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Provider } from './components/AppContext';
import Logo from './components/Logo';
import GlobalWrapper from './components/GlobalWrapper';
import Button from './components/Button';
import NoMatch from './pages/404';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit:700|Poppins&subset=latin-ext');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins' !important;
    color: #121212;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

class App extends Component {
  state = {
    topText: '',
    setTopText: topText => this.setState({ topText }),
    bottomText: '',
    setBottomText: bottomText => this.setState({ bottomText }),

    fontSize: 40,
    setFontSize: fontSize => this.setState({ fontSize }),
    lineHeight: 40,
    setLineHeight: lineHeight => this.setState({ lineHeight }),
    verticalOffset: 20,
    setVerticalOffset: verticalOffset => this.setState({ verticalOffset }),

    canvasWidth: 500,
    canvas: null,
    setCanvas: canvas => this.setState({ canvas }),
    image: null,
    setImage: image => this.setState({ image })
  };

  componentDidMount() {
    ReactGA.initialize('UA-122734777-2');
  }

  render() {
    return (
      <Provider value={this.state}>
        <Router>
          <GlobalWrapper>
            <Logo />

            <Button />

            <Suspense fallback={null}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NoMatch} />
              </Switch>
            </Suspense>

            <GlobalStyles />
          </GlobalWrapper>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
