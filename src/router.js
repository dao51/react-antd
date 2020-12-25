import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './views/login';
import Admin from './admin';
import Buttons from './views/ui/buttons';
import NoMatch from './views/NoMatch';

export default class IRouter extends React.Component {  
    render() {
        return (
           <Router>
               <App>
                   <Route path="/login" component={Login}></Route>
                   <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                            <Route component={NoMatch}></Route>
                        </Admin>
                    }></Route>
                   <Route path="/order/detail" component={Login}></Route>
               </App>
           </Router>
        );
    }
}