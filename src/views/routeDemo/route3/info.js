import React from 'react';
import {Link} from 'react-router-dom';

export default class Info extends React.Component {
  render(){
      return(
          <div>
              动态路由测试
              动态路由的值：{this.props.match.params.value}
          </div>
      );
  }
}