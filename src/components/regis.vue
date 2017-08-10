<template>
  <div id="regis">
    <form  method="post">
      <div id="logo" width="100%">
        <img src="../assets/logo.png" alt="" width="50%">
      </div>
      <div>
        <input type="text" name="name" placeholder="请输入姓名" required v-model="username" v-on:blur="_username($event)">
      </div>
      <div>
        <input type="text" name="cellphone" placeholder="请输入手机号" ref="phone" v-on:blur="_phone($event)" required v-model="phone">
      </div>
      <div>
        <input type="password" name="password" placeholder="请设置密码为8-16位" v-on:blur="_password($event)" required v-model="password">
      </div>
      <div class="code">
        <input type="text" name="code" placeholder="请输入验证码" required v-model="code">
        <button type="button" @click="_getCode()">获取验证码</button>
      </div>
      <div class="smit">
        <button type="button" @click="_submit($event)">注册</button>
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
        username:'',
        phone:'',
        password:'',
        code:'',
        msg: '',
        error: false
      }
    },
    methods: {
      _username(e){
        console.log(this.username)
        const pattern =/^([u4e00-u9fa5]|[ufe30-uffa0]|[a-za-z0-9_])*$/;
        if(this.username==''){
        }else if (!pattern.test(this.username)) {
          this.msg = "用户名只能使用数字、字母、下划线，请重新输入"
          e.target.focus()
          this.error = true
        } else {
          this.error = false
        }
      },
      _phone(e) {
        const pattern = /^1[34578]\d{9}$/;
        console.log(e)
        if(this.phone==''){
        }else if (!pattern.test(this.phone)) {
          this.msg = "您输入的手机号不正确，请重新输入"
          e.target.focus()
          this.error = true
        } else {
          this.error = false
        }
      },
      _password(e) {
        const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if(this.password==''){
        }else if (!pattern.test(this.password)) {
          console.log(this.password)
          this.msg = "密码长度应在8-16位，并且应该有英文和数字结合，请重新输入"
          this.error = true
          e.target.focus()
        } else {
          this.error = false
        }
      },
      _getCode() {
        var cellphone = this.$refs.phone.value
        this.$http.get('/auth/v1/user/get_verify_code?cellphone=' + cellphone)
          .then(function (res) {
            console.log(res.data)
          }, function (err) {
            console.log(err)
          })
      },
      _submit(e) {
        if(this.phone==''||this.username==''||this.phone==''||this.code==''){
          this.msg = "请填写完整的注册信息"
          this.error = true
        }else {
          this.error = false
          if(true){
            $('form').submit();
          }
//          this.$http.post('/auth/v1/user/register_by_cellphone', data)
//            .then(function (res) {
//              console.log(res.data)
//              if(res.data[success]){
//                this.$router.go("/")
//              }
//            }, function (err) {
//              console.log(err)
//            })
        }
      }
    },
    mounted() {

    }
  }
</script>

<style lang="less">
  @import '../less/regis.less';
</style>
