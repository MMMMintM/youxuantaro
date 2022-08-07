/**
 * zt
 * 分类
 */
import {Component} from "react";
import {View} from "@tarojs/components";
import TabBar from "../common/tabBar";
import Details from "./detials"

class Classify extends Component{
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
        <Details></Details>
        <View></View>
        <TabBar tabBarCurrent={1}></TabBar>
      </View>
    )
  }
}

export default Classify
