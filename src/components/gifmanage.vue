<template>
  <div id="gifmanage" v-title data-title="礼品管理">
    <ul class="list" v-for="(item,index) in gifInfo">
      <li>
        <p class="tit">{{item.typeGifInfo}}</p>
        <div class="menu">
          <p class="fl">{{item.moneyGifInfo}}元</p>
          <div class="fr">
            <span @click="editGif(index)"><img src="../assets/icon/edit.png" alt="">编辑</span>
            <span @click="deleteGif(index)"><img src="../assets/icon/delect.png" alt="">删除</span>
          </div>
        </div>
      </li>
    </ul>
    <div @click="goaddgif" class="smit">
      添加礼品
    </div>

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
    components: {
    },
    data() {
      return {
        dialogControl: true
      }
    },
    methods: {
      editGif(i) {
        this.$router.push('/addgif')
//        console.log(this.gifInfo[i].typeGifInfo)
        let obj = {
          typeGifInfo:this.gifInfo[i].typeGifInfo,
          moneyGifInfo:this.gifInfo[i].moneyGifInfo,
          index:i
        }
        this.$store.commit('EDIT_GIF',obj)
      },
      deleteGif(i) {
        this.$store.dispatch('delectGifList', i)
      },
      goaddgif(){
        this.$router.push('/addgif')
        this.$store.commit('EDIT_GIF',{})
      }
    },
    mounted() {

    }
  }
</script>

<style lang="less">
  @import '../less/gifmanage.less';
</style>
