//zt

import Taro from "@tarojs/taro";
import {AtButton} from "taro-ui";
import {Image, Text, View} from "@tarojs/components";
import {Component} from "react";
import {ITEM} from "../../constants/counter";
import Image1 from "../../images/mudrock.jpg"
import "./details.scss"


class details extends Component{
  homeClick = () =>{
    console.log("跳转到主页")
    Taro.reLaunch({
      url: '../index/index'
    })

  }
  cartClick = () =>{
    console.log("跳转到购物车")
    Taro.reLaunch({
      url: '../shopping/index'
    })
  }

  buyClick = () => {
    console.log("购买");
  }

  addClick = () =>{
    console.log("加入购物车")
  }

  selectAmount = () =>{

  }



  render() {
    return (
      <View className='item'>
        <Image className='itemImg'
          style='width: 100%;height: 200px;background: #fff;'
          src={Image1}
          // src={ITEM.imgUrl}
        />
        <View className='itemDetail'>
          <View className='price'>
            <Text>￥{ITEM.price}</Text>
          </View>
          <View className='itemName'>
            <Text>{ITEM.name}</Text>
          </View>
          <View className='describe'>
            <Text>{ITEM.discription}</Text>
          </View>
        </View>
        <View className='buyField'>
          <View className='homeAndCart'>
            <AtButton className='at-icon at-icon-home homeOption home' onClick={this.homeClick}>
              <Text>主页</Text>
            </AtButton>
            <AtButton className='at-icon at-icon-shopping-cart homeOption cart' onClick={this.cartClick}>
              <Text>购物车</Text>
            </AtButton>
          </View>


          <View className='addAndBuy'>
            <AtButton className='buyOption buy' onClick={this.buyClick}>立即购买</AtButton>
            <AtButton className='buyOption add' onClick={this.addClick}>加入购物车</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default details
