<template>
  <div id="sellername" v-title data-title="商户名称">
    <img src="../assets/icon/upload.png" width="50%" alt="" style="margin: 0 auto;display: block">
    <div class="tit">
      显示在页面头部，在使用过程中传播品牌
    </div>
    <div class="name">
      <input type="text" name="" placeholder="请输入" v-model="shopName">
    </div>
    <button class="smit weui-btn" @click="save()" v-bind:class="disabled?'weui-btn_disabled weui-btn_default':'weui-btn_primary'" v-bind:disabled="shopName===''?disabled = true: disabled =false">保存</button>
    <p class="clear" @click="clear">清除</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        accountInfo: 'accountInfo',
      })
    },
    components: {},
    data() {
      return {
        shopName:'',
        disabled: false,
      }
    },
    methods: {
      save() {
        if (this.shopName == '') {
        } else {
          console.log(this.shopName)
          this.$store.commit('SET_SHOP_NAME', this.shopName)
          $.alert("设置成功")
        }
      },
      clear() {
        this.shopName = ''
      }
    },
    mounted() {
      this.shopName = this.accountInfo.shopName
    }
  }
</script>

<style lang="less">
  @import '../less/sellername.less';
</style>
