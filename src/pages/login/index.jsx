/*
* 登录
* */
import {Component} from 'react';

export default class Login extends Component {
  constructor () {
    super(...arguments)

  }
  render() {
<view>
  <button
    type='primary'
    plain
    open-type='getUserInfo'
    bindgetuserinfo='handleGetUserInfo'>
    登陆
  </button>
</view>

  }
}
