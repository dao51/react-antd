import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './views/login';
import Admin from './admin';
import Buttons from './views/ui/buttons';
import Modals from './views/ui/modals';
import Loadings from './views/ui/loadings';
import Notice from './views/ui/notice';
import Messages from './views/ui/messages';
import Tabs from './views/ui/tabs';
import Gallery from './views/ui/gallery';
import Carousel from './views/ui/carousel';
import NoMatch from './views/NoMatch';
import FormLogin from './views/form/login';
import Register from './views/form/register';
import BasicTable from './views/table/basicTable';
import HighTable from './views/table/highTable';
import RichText from './views/rich/index';

export default class IRouter extends React.Component {  
    render() {
        return (
           <Router>
               <App>
                   <Route path="/login" component={Login}></Route>
                   <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Messages}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={Register}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route path="/admin/rich" component={RichText}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                   <Route path="/order/detail" component={Login}></Route>
               </App>
           </Router>
        );
    }
}