import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ShowViewer from './containers/ShowViewer';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Redirect exact from="/" to="/show/1" />
          <Route path="/show/:showId" component={ShowViewer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
