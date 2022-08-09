/**
 *
 * 我的
 */

import {Component} from "react";
import {Button, View} from "@tarojs/components";
import TabBar from "../common/tabBar";


class User extends Component{
  constructor () {
    super(...arguments)

  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  miniLogin = () => {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (e) => {
        console.log(e)
        //登录，获取用户的openid
        wx.login({
          success(res) {
            console.log("获取临时凭证code", res.code);
            //把code传给后台，后台访问微信小程序后台返回openid和sessionid
            const code = res.code
            const rawData = e.rawData
            const signature = e.signature
            console.log(code)
            console.log(rawData)
            console.log(signature)
            wx.request({
              url: "http://localhost:8090/MiniUser/GetWxOpenId",
              data: {
                code,
                rawData,
                signature
              },
              method: "POST",
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              success: (a) => {
                console.log("返回user")
                console.log(a.data);

              }
            })
          }
        })
      },
      fail: (res) => {
        console.log(res)
      }
    })
  }

  render() {
    return(
      <View>
        <TabBar tabBarCurrent={3}></TabBar>
        <View className='beforeLogin'>
          <Button onClick={this.miniLogin} className='loginButton'>登陆</Button>
          <navigator url=''></navigator>
        </View>




      </View>
    )
  }
}

export default User
