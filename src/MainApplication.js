import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './View/About/About'
import Facts from './View/Facts/Facts'
function MainApplication() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={About}/>
        <Route path='/about' component={About}/>
        <Route path='/facts' component={Facts}/>
      </Switch>
    </main>
  );
}

export default  MainApplication