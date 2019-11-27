import React from "react";
import { Meteor } from "meteor/meteor";
// import ReactDom from 'react-dom';
import { Render } from "react-dom";
// import { renderToString } from 'react-dom/server';
// import { onPageLoad } from 'meteor/server-render';
import injectTapEventPlugin from "react-tap-event-plugin";
import { BrowserRouter as Router,  Switch, Router } from 'react-router-dom';
  //we use router if we have more than one page


import App from "../imports/ui/App";
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

injectTapEventPlugin();
//this is a method we can run anywhere in the project,if we run it in the client it will run those files into the client,and if in server...

Meteor.startup(() => {
  render((
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/new" component={New}/>
        <Route component={Lost}/>
      </Switch>
    </Router>
  ), document.getElementById("render-target")
);
});
