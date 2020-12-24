import React from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Main from './Main';
import About from './about';
import Topic from './topic';

export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>  {/* 哈希路由 */}
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>  {/* Link相当于a标签 */}
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topic</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>  {/* Switch默认匹配首个路径，若想避免可在Route中添加exact属性 */}
                        {/* Route加载路由 exact={true}精确匹配路径 */}
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}