<template>
  <div id="addgif" v-title data-title="添加礼品">
    <div class="name">
      <p class="fl">礼品名称</p>
      <input type="text" name="" class="fr" placeholder="请填写" v-model="gifInfo.typeGifInfo">
    </div>
    <div class="price">
      <p class="fl">价格</p>
      <input type="text" name="" class="fr" placeholder="请填写" v-model="gifInfo.moneyGifInfo">
    </div>
    <div class="smit" @click="_save()">
      保存
    </div>
    <p id="message" v-if="error">
      {{message}}
    </p>
  </div>
</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

  export default {

    components: {},
    data() {
      return {
        gifInfo: {
          typeGifInfo: '',
          moneyGifInfo: ''
        },
        message:'',
        error:false
      }
    },
    methods: {
      _save(){
        if(this.gifInfo.typeGifInfo==null||this.gifInfo.typeGifInfo===''){
          this.message = "请填写好商品名称"
          this.error=true
        }else if(this.gifInfo.moneyGifInfo==null||this.gifInfo.moneyGifInfo===''){
          this.message = "请填写好商品价格"
          this.error=true
        }else if(isNaN(this.gifInfo.moneyGifInfo)){
          this.message = "商品价格只能为数值"
          this.error=true
        }else {
          this.$store.commit('SET_GIFINFO',this.gifInfo)
          this.$router.push('/gifmanage')
        }
//
      }
    },
    mounted() {

    }
  }
</script>

<style lang="less">
  @import '../less/addgif.less';
</style>
