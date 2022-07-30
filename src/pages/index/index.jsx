import { Component } from 'react'
import {Text, View} from "@tarojs/components";
import TabBar from "../common/tabBar";


class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <view>
        <View><Text>主页</Text></View>
        <TabBar tabBarCurrent={0}></TabBar>
      </view>
    )
  }
}

export default Index

