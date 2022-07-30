/**
 * zt
 * 我的
 */
import {Component} from "react";
import {View} from "@tarojs/components";
import TabBar from "../common/tabBar";

class User extends Component{
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return(
      <View>
        <View>我的</View>
        <TabBar tabBarCurrent={3}></TabBar>
      </View>
    )
  }
}

export default User
