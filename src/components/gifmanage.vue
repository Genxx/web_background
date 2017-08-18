<template>
  <div id="gifmanage" v-title data-title="礼品管理">
    <ul class="list" v-for="(item,index) in gifInfo">
      <li>
        <p class="tit">{{item.typeGifInfo}}</p>
        <div class="menu">
          <p class="fl">{{item.moneyGifInfo}}元</p>
          <div class="fr">
            <span @click="editGif"><img src="../assets/icon/edit.png" alt="">编辑</span>
            <span @click="deleteGif(index)"><img src="../assets/icon/delect.png" alt="">删除</span>
          </div>
        </div>
      </li>
    </ul>
    <router-link tag="div" to="addgif" class="smit">
      添加礼品
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import {mapGetters} from 'vuex'
  import {gifInfo} from "../store/getters";

  export default {
    computed: {
      ...mapGetters({
        gifInfo: 'gifInfo'
      })
    },
    components: {},
    data() {
      return {}
    },
    methods: {
      editGif(i) {

      },
      deleteGif(i) {
        this.$store.dispatch('delectGifList', i)
      },
//      del( state , i ){
//        state.users.splice( i , 1 )
//      }

    },
    mounted() {

    }
  }
</script>

<style lang="less">
  @import '../less/gifmanage.less';
</style>
