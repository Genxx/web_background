<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import store from './store/index'
  import {initStore} from './store/action'
  import {showMoney} from './store/getters'
  import {mapGetters} from 'vuex'
  import Vue from 'vue'
  Vue.directive('title', {
    inserted: function (el, binding) {
      document.title = el.dataset.title
    }
  })
  export default {
    name: 'app',
    store,
    vuex:{
      actions:{
        initStore
      },
      getters:{
        showMoney
      }
    },
    ready(){
      this.initStore()
    },
    mounted (){

    }
  }
</script>

<style>

</style>
