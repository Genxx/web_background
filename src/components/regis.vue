<template>
  <div id="regis" v-title data-title="注册页面">
    <form method="post">
      <div id="logo" width="100%">
        <img src="../assets/logo.png" alt="" width="50%">
      </div>
      <div>
        <input type="text" name="name" placeholder="请输入姓名" required v-model="name" v-on:blur="_username($event)">
      </div>
      <div>
        <input type="text" name="cellphone" placeholder="请输入手机号" ref="phone" v-on:blur="_phone($event)" required
               v-model="cellphone">
      </div>
      <div>
        <input type="password" name="password" placeholder="请设置密码为8-16位" v-on:blur="_password($event)" required
               v-model="password">
      </div>
      <div class="code">
        <input type="text" name="code" placeholder="请输入验证码" required v-model="code">
        <button type="button" @click="_getCode()" v-bind:disabled="status">{{code_msg}}</button>
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
        name: '',
        cellphone: '',
        password: '',
        code: '',
        msg: '',
        error: false,
        code_msg: '获取验证码',
        status: false
      }
    },
    methods: {
      _username(e) {
        console.log(this.name)
        const pattern = /^([u4e00-u9fa5]|[ufe30-uffa0]|[a-za-z0-9_])*$/;
        if (this.username == '') {
        } else if (!pattern.test(this.name)) {
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
        if (this.cellphone == '') {
        } else if (!pattern.test(this.cellphone)) {
          this.msg = "您输入的手机号不正确，请重新输入"
          e.target.focus()
          this.error = true
        } else {
          this.error = false
        }
      },
      _password(e) {
        const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (this.password == '') {
        } else if (!pattern.test(this.password)) {
          this.msg = "密码长度应在8-16位，并且应该有英文和数字结合，请重新输入"
          this.error = true
          e.target.focus()
        } else {
          this.error = false
        }
      },
      _getCode(obj, msg) {
        if (this.name != '' && this.password != '' && this.cellphone != '' && !this.error) {
//          this.status = true
          this.$http.get('/auth/v1/merchant/get_verify_code?cellphone=' + this.cellphone)
            .then(function (res) {
              if (res.data.code=="0") {
                this.error = true;
                this.msg="该用户已被注册";
                this.cellphone='';
              } else if(res.data.code=="1"){
                this.status = false;
                var wait = 90;
                let self = this;
                function time(obj) {
                  if (wait == 0) {
                    self.code_msg = "获取验证码"
                    self.error = false
                    wait = 90;
                  } else {
                    self.code_msg = "重新发送(" + wait + ")";
                    self.error = true
                    wait--;
                    setTimeout(function () {
                        time(obj)
                      },
                      1000)
                  }
                }
                time(obj)
              }else if(res.data.code=="0"){
                this.msg="发送验证码失败，请稍后再试";
                this.error = true;
              }
            }, function (err) {
              console.log(err)
            })
        } else {
          this.error = false;
        }

      },
      _submit(e) {
        if (this.phone == '' || this.username == '' || this.cellphone == '' || this.code == '' || this.password == '') {
          this.msg = "请填写完整的注册信息"
          this.error = true
        } else {
          this.error = false
          var te = this;
          const obj = {name: this.name, cellphone: this.cellphone, password: this.password, code: this.code}
          this.$http.post('/auth/v1/merchant/register_by_cellphone', obj)
            .then(function (res) {
              console.log(res.data)
              if (res.data.code == "1") {
                this.error = false
                localStorage.setItem("account", this.cellphone)
                $.toast.prototype.defaults.duration = 1000
                $.toast("注册成功", function () {
                  te.$router.push("/index")
                });
              } else if (res.data.code == "-1") {
                this.msg = "验证码错误"
                this.error = true
              } else if(res.data.code =="0"){
                this.msg = "验证码过期，请重新验证"
                this.error = true
              }else {
                console.log(data.error);
              }
            }, function (err) {
              console.log(err)
            })
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
