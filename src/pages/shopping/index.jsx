/**
 * zt
 * 购物车
 */

import {Component} from "react";
import { Text, View} from "@tarojs/components";
import TabBar from "../common/tabBar";

class Shopping extends Component{
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
        <View><Text>购物车</Text></View>
        <TabBar tabBarCurrent={2}></TabBar>
      </View>
    )
  }
}

export default Shopping
