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
    <div class="smit" v-show="editStatus" @click="_save()">
      保存
    </div>
    <div class="smit" v-show="!editStatus" @click="edit()">
      保存
    </div>
    <p id="message" v-if="error">
      {{message}}
    </p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

  function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
      if (src.hasOwnProperty(prop)) {
        dst[prop] = src[prop];
      }
    }
    return dst;
  }

  export default {
    computed: {
      ...mapGetters({
        editGif: 'editGif'
      })
    },
    components: {},
    data() {
      return {
        gifInfo: {
          typeGifInfo: '',
          moneyGifInfo: ''
        },
        message: '',
        error: false,
        editStatus: false,
      }
    },
    methods: {
      _save() {
        if (this.gifInfo.typeGifInfo == '') {
          this.message = "请填写好商品名称"
          this.error = true
        } else if (this.gifInfo.moneyGifInfo === '') {
          this.message = "请填写好商品价格"
          this.error = true
        } else if (isNaN(this.gifInfo.moneyGifInfo)) {
          this.message = "商品价格只能为数值"
          this.error = true
        } else {
          this.$store.commit('SET_GIFINFO', this.gifInfo)
          this.$router.push('/gifmanage')
        }
      },
      edit() {
        if (this.gifInfo.typeGifInfo === '' && this.gifInfo.typeGifInfo === '') {
          this.$store.dispatch('delectGifList', this.gifInfo.index)
          this.$router.push('/gifmanage')
        } else if (isNaN(this.gifInfo.moneyGifInfo)) {
          this.message = "商品价格只能为数值"
          this.error = true
        } else if (this.gifInfo.typeGifInfo == null) {
          this.message = "请填写好商品名称"
          this.error = true
        } else if (this.gifInfo.moneyGifInfo === '') {
          this.message = "请填写好商品价格"
          this.error = true
        }else {
          let obj = {
            typeGifInfo: this.gifInfo.typeGifInfo,
            moneyGifInfo: this.gifInfo.moneyGifInfo,
            index: this.editGif.index
          }
          this.$store.commit('SET_CHANGEGIFINFO', this.gifInfo)
          this.$router.push('/gifmanage')
        }
      }
    },
    mounted() {
      if (this.editGif == '') {
        this.editStatus = true;
      } else {
        this.editStatus = false;
      }
      this.gifInfo = shallowCopy(this.editGif)
    }
  }
</script>

<style lang="less">
  @import '../less/addgif.less';
</style>
