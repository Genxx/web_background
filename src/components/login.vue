<template>
  <div id="login" method="post" v-title data-title="登录页面">
    <form>
      <div id="logo" width="100%">
        <img src="../assets/logo.png" alt="" width="50%">
      </div>
      <div>
        <input type="tel" name="cellphone" placeholder="手机号" v-model="user" required v-on:blur="_phone($event)" required>
      </div>
      <div>
        <input type="password" name="password" placeholder="密码" v-model="password" v-on:blur="_password($event)"  required>
      </div>
      <div class="smit">
        <button type="button" @click="_submit($event)">登录</button>
        <router-link to="/regis" tag="button">注册</router-link>
      </div>
      <p v-if="error">{{msg}}</p>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'

  import VueResource from 'vue-resource'

  Vue.use(VueResource)

  const fto = require('form_to_object')

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

  export default {

    components: {},
    data() {
      return {
        user: '',
        password: '',
        msg: '',
        error: false
      }
    },
    methods: {
      checkLogin() {
        //检查是否存在session
        //cookie操作方法在源码里有或者参考网上的即可
        if (!localStorage.getItem('token')) {
          //如果没有登录状态则跳转到登录页
          this.$router.push('/');
        } else {
          //否则跳转到登录后的页面
          this.$router.push('/index');
        }
      },
      _phone(e) {
        const pattern = /^1[34578]\d{9}$/;
        console.log(e)
        if (!pattern.test(this.user)) {
          this.msg = "您输入的手机号不正确，请重新输入"
          e.target.focus()
          this.error = true
        } else {
          this.error = false
        }
      },
      _password(e) {
        const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (!pattern.test(this.password)) {
          this.msg = "密码输入错误，请重新输入"
          this.error = true
          e.target.focus()
        } else {
          this.error = false
        }
      },
      _submit(e) {
        console.log(this.user)
        console.log(this.password)
        const pattern = /^1[34578]\d{9}$/;
        const pattern2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (this.user != null && this.password != null&&pattern.test(this.user)&&pattern2.test(this.password)) {
//          this.$http.post('/auth/v1/user/login_by_cellphone?user=' + this.user + '&password=' + this.password)
//            .then(function (res) {
//              console.log(res.data)
//              if (res.data[success]) {
//                localStorage.setItem("token", res.data[token])
//                this.$router.go("/index")
//              }
//            }, function (err) {
//              console.log(err)
//            })
          $('form').submit();
        }

      },
    },
    watch: {
      "$route": "checkLogin"
    },
    created() {
      this.checkLogin();
    },
    mounted() {

    }
  }
</script>

<style lang="less">
  @import '../less/login.less';
</style>
