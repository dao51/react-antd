import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './../route1/about';
import Topic from './../route1/topic';
import Home from './Home';

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* render方法，渲染一个组件，其中包裹一个子路由，常用来处理嵌套路由 */}
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}