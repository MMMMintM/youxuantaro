import {Component} from "react";
import { View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import taro from "@tarojs/taro";
import "./jump.scss"

class jump extends Component{

  jumpClick = () =>{
    console.log("jump")
    taro.navigateTo({
      url: 'details'
    })
  }
  render(){
    return(
      <View>
        <AtButton onClick={this.jumpClick}>
          点击跳转到商品详情界面
        </AtButton>
      </View>
    )
  }
}

export default jump
