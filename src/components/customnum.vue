<template>
	<div id="customnum" v-title data-title="客服设置">
    	<div class="num">
    		<input type="text" name="" placeholder="乐摇摇客服4001234561234">
    	</div>
    	<div class="smit">保存</div>
    	<button class="s_clear weui-btn">清除</button>
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

    },
	mounted (){

	}
}
</script>

<style lang="less">
  @import '../less/customnum.less';
</style>
