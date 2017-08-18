<template>
	<div id="customnum" v-title data-title="客服设置">
    	<div class="num">
    		<input type="text" name="" placeholder="请设置客服名称" v-model="customerService">
    	</div>
    	<button class="smit weui-btn" @click="save()" v-bind:class="disabled?'weui-btn_disabled weui-btn_default':'weui-btn_primary'" v-bind:disabled="customerService===''?disabled = true: disabled =false">保存</button>
    	<div class="s_clear" @click="clear">清除</div>
	</div>
</template>

<script>
import Vue from 'vue'

import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      accountInfo:'accountInfo',
    })
  },
	components: {

	},
	data () {
	  	return{
          customerService:'',
          disabled: false,
	  	}
	},
	methods:{
      save(){
        if(this.customerService ==''){
        }else{
          console.log(this.customerService)
          this.$store.commit('SET_CUSTOMER_SERVICE',this.customerService)
          $.toast("设置成功")
        }
      },
      clear(){
        this.customerService=''
      }
    },
	mounted (){
    this.customerService = this.accountInfo.customerService
  }
}
</script>

<style lang="less">
  @import '../less/customnum.less';
</style>
