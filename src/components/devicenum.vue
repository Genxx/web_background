<template>
	<div id="devicenum" v-title data-title="设置设备编号">
    	<div class="header">
    		请选择设备编号
    	</div>
    	<div class="info">
    		<div class="tit">
    			<p>编号用于启动设备，请按顺序填写；</p>
    			<p>同一个投放地编码不可重复。</p>
    			<ul class="diff">
    				<li class="rged">
    					<span class="fl mr k1"></span>
    					<span class="fl">已注册</span>
    				</li>
    				<li class="cose">
    					<span class="fl mr k2"></span>
    					<span class="fl">可选</span>
    				</li>
    				<li class="cked">
    					<span class="fl mr k3"></span>
    					<span class="fl">选中</span>
    				</li>
    			</ul>
    		</div>
    		<ul class="num" >
          <li v-for="item in listNum" v-if="item.num" :class="[item.num%4==0?'mr0':'', liNum==item.num?'active': ''] "  v-on:click="_cked(item.num)">{{item.num}}</li>
    		</ul>
    	</div>
    	<div class="smit">
    		保存
    	</div>
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
	  		liNum: 1,
        listNum:[
          {
            num:1,
          },
          {
            num:2,
          },
          {
            num:3,
          },
          {
            num:4,
          },
          {
            num:5,
          },
          {
            num:6,
          },
          {
            num:7,
          },
          {
            num:8,
          },
          {
            num:9,
          },
          {
            num:10,
          },
          {
            num:11,
          },
          {
            num:12,
          },
          {
            num:13,
          },
          {
            num:14,
          },
          {
            num:15,
          },
          {
            num:16,
          },
        ]
	  	}
	},
	methods:{
	  	_cked (t) {
	  	   this.liNum=t;
        }
    },
	mounted (){

	}
}
</script>

<style lang="less">
  @import '../less/devicenum.less';
</style>
