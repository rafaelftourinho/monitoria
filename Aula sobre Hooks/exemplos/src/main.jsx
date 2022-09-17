import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css'
import FirstProvider from './context/FirstProvider';
import Felicidades from './pages/Felicidades';
import MeowPhrases from './pages/MeowPhrases';
import MeowPhotos from './pages/MeowPhotos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ App } />
          <Route exact path="/meow" component={ MeowPhrases} />
          <Route exact path="/felicidades" component={ Felicidades } />
          <Route exact path="/photos" component={ MeowPhotos } />
        </Switch>
      </BrowserRouter>
    </FirstProvider>
  </React.StrictMode>
)
