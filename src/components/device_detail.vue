<template>
  <div id="deviceDetail">
    <ul class="device">
      <li class="device-sty">
        <p class="fl">设备类型</p>
        <p class="fr">娃娃机</p>
      </li>
      <li class="device-id">
        <p class="fl">设备唯一码</p>
        <p class="fr">117782</p>
      </li>
      <router-link tag="li" to="/deviceNum" class="device-num">
        <p class="fl">编号</p>
        <p class="fr">1 &gt;</p>
      </router-link>
      <li class="device-status">
        <p class="fl">状态</p>
        <p class="fr">离线</p>
      </li>
      <li class="device-name">
        <p class="fl">店名</p>
        <p class="fr">考拉</p>
      </li>
      <li class="device-addr">
        <p class="fl">地址</p>
        <p class="fr">布衣港电商产业园</p>
      </li>
    </ul>
    <router-link tag="div" to="/price" class="price">
      <p class="fl">单价</p>
      <p class="fr">1币/次&gt;</p>
    </router-link>
    <div class="gif">
      <router-link tag="div" to="/gif" class="tit">
        <p class="fl">礼品</p>
        <p class="fr">已设置&gt;</p>
      </router-link>
      <ul class="gif-list">
        <li>
          <div class="fl">
            <p class="gif-tit">纸巾</p>
            <p class="gif-num">0.30元/个</p>
          </div>
          <p class="fr">剩余20个</p>
        </li>
      </ul>
    </div>
    <div class="oth" @click="test">
      <p class="fl">备注</p>
      <p class="fr" >{{remarks}}</p>
    </div>
    <div class="quit">
      解除绑定
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  export default {
    component: {
    },
    data() {
      return {
        remarks: '未填写>'
      }
    },
    methods: {
      test(){
        $.prompt({
          title:'',
          text: '备注',
          input: '请填写备注内容',
          empty: false, // 是否允许为空
          props: ['input'],
          onOK: function (input) {
            if(input!=="请填写备注内容"&&input!==''){
              this.$http.post('/auth/v1/user/bz?'+input,data)
                .then(function(res){
                  console.log(res.data)
                  $('.fr').html(input)
                },function(err){
                  $.alert("设置失败");
                })
            }
            if(inpout==''){
              $.alert("设置失败");
            }
          },
          onCancel: function () {
            //点击取消
          }
        });
      }
    },
    mounted() {
    }

  }
</script>

<style lang="less" >
  @import '../less/device_detail.less';
</style>
