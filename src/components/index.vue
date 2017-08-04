<template>
	<div id="app">
    	<div class="header">
            <div class="header-t">
                <p>今日收益 (元)</p>
                <h3>0.60</h3>
            </div>
            <ul class="header-m">
                <li class="online">
                    <p>在线支付</p>
                    <p>0.00元</p>
                </li>
                <li class="ad">
                    <p>广告收益</p>
                    <p>0.60元</p>
                </li>
                <li class="cash">
                    <p>现金收益</p>
                    <p>0.00元</p>
                </li>
            </ul>
            <ul class="header-b">
                <li>
                    <p>礼品消耗</p>
                    <p>0个</p>
                </li>
                <li>
                    <p>线下投币</p>
                    <p>7个</p>
                </li>
            </ul>
        </div>
        <router-link tag="div" to="/device" class="device" >
            <p>设备管理</p>
            <p class="num">共1台，在线0台</p>
        </router-link>
        <ul class="regist">
            <li @click="_scan()">
                <p>设备注册</p>
                <p>扫描设备二维码</p>
            </li>
            <router-link tag="li" to="/gains" >
                <p>经营统计</p>
                <p>经营数据监控</p>
            </router-link>
        </ul>
        <router-link tag="div" to="/account" class="person" >
            <div>
                <span>我的账号</span>
                <span class="radius">可设置商户名称</span>
            </div>
            <p>钱包、投放地址、消息设置</p>
        </router-link>
	</div>
</template>

<script>
import Vue from 'vue'
import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

export default {

	components: {

	},
	data () {
	  	return{

	  	}
	},
	methods:{
        _scan () {
            wx.scanQRCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr;// 当needResult 为 1 时，扫码返回的结果
                    console.log(result)
                }
            });
        }
	},
	mounted (){

	}
}
</script>

<style lang="less">
  @import '../less/index.less';
</style>
