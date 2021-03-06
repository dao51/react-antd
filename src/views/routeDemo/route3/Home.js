import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main">Home1</Link>  {/* Link相当于a标签 */}
                    </li>
                    <li>
                        <Link to="/about">About1</Link>
                    </li>
                    <li>
                        <Link to="/topic">Topic1</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/admin">admin</Link>
                    </li>
                </ul>
                <hr/>
                { this.props.children }
            </div>
        );
    }
}