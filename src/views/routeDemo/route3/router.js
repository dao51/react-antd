import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import About from '../route1/about';
import Topic from '../route1/topic';
import Home from './Home';
import Info from './info';
import NoMatch from './NoMatch';

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        {/* render方法，渲染一个组件，其中包裹一个子路由，常用来处理嵌套路由 */}
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}