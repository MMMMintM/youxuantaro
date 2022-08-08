/**
 * zt
 * 分类
 */
import {Component} from "react";
import {View} from "@tarojs/components";
import TabBar from "../common/tabBar";
// import Details from "./details"
import Jump from "./jump"

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
        <Jump></Jump>
        {/*<Details></Details>*/}
        <TabBar tabBarCurrent={1}></TabBar>
      </View>
    )
  }
}

export default Classify
