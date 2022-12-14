/**
 * zt
 * 底部导航栏
 */
import {Component} from "react";
import {AtTabBar} from "taro-ui";
import {View} from "@tarojs/components"
import Taro from "@tarojs/taro";


class TabBar extends Component {

  handleClick (value) {
    switch (value){
      case 0:
        Taro.reLaunch({
          url:'/pages/index/index'
        });
        break;
      case 1:
        Taro.reLaunch({
          url:'/pages/classify/index'
        });

        break;
      case 2:
        Taro.reLaunch({
          url:'/pages/shopping/index'
        });
        break;
      case 3:
        Taro.reLaunch({
          url:'/pages/user/index'
        });
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <View>
        <AtTabBar
          fixed
          backgroundColor='#ffffff'
          color='#cccccc'
          selectedColor='#d40000'
          tabList={[
            {title:'首页',iconType:'home'},
            {title:'分类',iconType:'star'},
            {title:'购物车',iconType:'shopping-cart'},
            {title:'我的',iconType:'user'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.tabBarCurrent}
        />
      </View>
    )
  }
}

export default TabBar
