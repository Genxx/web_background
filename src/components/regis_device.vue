<template>
  <div id="deviceDetail" v-title data-title="设备注册">
    <form>
      <ul class="device">
        <li class="device-sty">
          <label for="deviceType" class="fl"><em>*</em>设备类型:</label>
          <input id="deviceType" v-model="deviceInfo.deviceType" type="text" placeholder="请选择设备类型" class="fr"/>
        </li>
        <li class="device-id">
          <label for="deviceId" class="fl">设备唯一码:</label>
          <input id="deviceId" v-model="deviceInfo.deviceId" type="text" class="fr" readonly/>
        </li>
        <li class="device-num">
          <label for="num" class="fl"><em>*</em>设备编号:</label>
          <input id="num" v-model="deviceInfo.num" type="text" placeholder="请填写设备编号" class="fr"/>
        </li>
        <!-- <li class="device-status">
          <label for="onlineStatus" class="fl"><em>*</em>设备状态:</label>
          <input id="onlineStatus" v-model="deviceInfo.onlineStatus" type="text" placeholder="请选择设备状态" class="fr"/>
        </li> -->
        <li class="device-name">
          <label for="shopName" class="fl"><em>*</em>店名:</label>
          <input id="shopName" v-model="deviceInfo.shopName" type="text" placeholder="请填写商店名称" class="fr"/>
        </li>
        <li class="device-addr">
          <label for="addrss" class="fl"><em>*</em>设备地址:</label>
          <input id="addrss" v-model="deviceInfo.address" type="text" placeholder="请填写设备类型" class="fr"
                 @click="_checkAddr"/>
        </li>
        <li class="device-price">
          <label for="gifPrice" class="fl"><em>*</em>礼品单价:</label>
          <input id="gifPrice" v-model="deviceInfo.gifPrice" type="text" placeholder="请填写设备类型" class="fr"/>
        </li>
        <li class="gif-name">
          <label for="gifName" class="fl"><em>*</em>礼品名称:</label>
          <input id="gifName" v-model="deviceInfo.gifName" type="text" placeholder="请填写设备类型" class="fr"/>
        </li>
        <!-- <li class="gif-num">
          <label for="gifNum" class="fl"><em>*</em>礼品数量:</label>
          <input id="gifNum" v-model="deviceInfo.gifNum" type="Number" placeholder="请填写礼品数量" class="fr" @blur="checkNum($event)"/>
        </li> -->
        <li class="remarks">
          <label for="remarks" class="fl">备注:</label>
          <textarea id="remarks" v-model="deviceInfo.remarks" placeholder="备注特殊情况" rows="4" class="fr">
        </textarea>
        </li>
      </ul>
      <div class="button">
        <button id="confim" class="weui-btn weui-btn_primary" type="button" @click="submitForm">确定</button>
        <button id="cancle" class="weui-btn weui-btn_primary">取消</button>
      </div>
    </form>
    <weui-distpicker v-if="show" :province="message.province" :city="message.city" :area="message.area"
                     @confirm="onConfirm" @cancel="onCancel"></weui-distpicker>
    <div v-show="error" id="error">{{msg}}</div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import WeuiDistpicker from 'weui-distpicker'

  function GetRequest(strName) {
        var strHref = window.location.href
        var intPos = strHref.indexOf("?");
        var strRight = strHref.substr(intPos + 1);
        var arrTmp = strRight.split("&");
        for (var i = 0; i < arrTmp.length; i++) {
            var arrTemp = arrTmp[i].split("=")
            if (arrTemp[0].toUpperCase() == strName.toUpperCase()) {
                return arrTemp[1]
            }
        }
        return false;
    }

  function Num() {
    let num = [];
    for (let i = 0; i <= 60; i++) {
      num[i] = i;
    }
    console.log(num)
    return num
  }

  //  离线为：0，在线为：1
  // function onlineStusts(obj) {
  //   if (obj == 0) {
  //     this.onlineStatus = '离线'
  //   } else if (obj == 1) {
  //     this.onlineStatus = '在线'
  //   } else {
  //     this.onlineStatus = ''
  //   }
  // }

  export default {
    components: {
      WeuiDistpicker
    },
    data() {
      return {
        deviceInfo: {
          deviceType: '',
          deviceId: '',
          num: '',
          //onlineStatus: '',
          shopName: '',
          address: '',
          gifName: '',
          gifPrice: '',
          //gifNum: '',
          remarks: '',
        },
        deviceTypeOptions: [
          '游戏机', '纸巾机', '霸王机'
        ],
        onlineStatusOptions: [
          '在线', '离线'
        ],
        gifNameOptions: [
          '纸巾', '饮品', '零食', '其他'
        ],
        message: {
          province: "广东省",
          city: '广州市',
          area: '天河区'
        },
        show: false,
        error: false,
        msg: '',
      }
    },
    methods: {
      _checkAddr() {
        this.show = true
      },
      onConfirm(obj, city) {
        this.deviceInfo.address = obj[0].label + "/" + obj[1].label + '/' + obj[2].label
        this.show = false;
      },
      onCancel() {
        this.show = false;
      },
      submitForm() {
        console.log(this.deviceInfo);
        if (this.deviceInfo.deviceType == '' || this.deviceInfo.num == '' || this.deviceInfo.onlineSatus == '' || this.deviceInfo.shoName == '' || this.deviceInfo.addrss == ''
          || this.deviceInfo.gifName == '' || this.deviceInfo.gifPrice == '' || this.deviceInfo.gifNum == '') {
          this.error = true;
          this.msg = "请完善所有内容"
        } else {
          this.error = false;
          var te = this;
          var obj = this.deviceInfo
          obj.account = localStorage.getItem("account")
          this.$http.post('/api/v1/device/device_register',obj)
          .then((res)=>{
            if(res.data.code == '1'){
              $.toast.prototype.defaults.duration = 1000
              $.toast("设备注册成功", function () {
                  te.$router.push("/index")
                });
            }
          }).catch((err)=>{
            console.error(err)
          })
        }
      },
      checkNum(e){
        const reg = /^[1-9]\d*$/;
        if(!reg.test(this.deviceInfo.gifNum)){
          this.deviceInfo.gifNum='';
          this.error = true;
          this.msg="礼品数量只能输入正整数！"
          e.target.focus()
          console.log(54656)
        }else {
          this.error = false;
        }
      }

    },
    mounted() {
      var self = this;
      var eid = GetRequest("eid");
      this.deviceInfo.deviceId = eid
      $("#deviceType").picker({
        title: "请选择设备类型",
        cols: [
          {
            textAlign: 'center',
            values: this.deviceTypeOptions
          }
        ],
        onChange: function (input) {
          self.deviceInfo.deviceType = input.displayValue[0];
        },
        onClose: function () {
        }
      });
      $("#num").picker({
        title: "请选择设备编号",
        cols: [
          {
            textAlign: 'center',
            values: Num()
          }
        ],
        onChange: function (input) {
          self.deviceInfo.num = input.displayValue[0];
        },
        onClose: function () {
        }
      });
      $("#onlineStatus").picker({
        title: "请选择设备状态",
        cols: [
          {
            textAlign: 'center',
            values: this.onlineStatusOptions
          }
        ],
        onChange: function (input) {
          self.deviceInfo.onlineStatus = input.displayValue[0];
        },
        onClose: function () {
        }
      });
      $("#gifPrice").picker({
        title: "请选择礼品单价（元）",
        cols: [
          {
            textAlign: 'center',
            values: Num()
          }
        ],
        onChange: function (input) {
          self.deviceInfo.gifPrice = input.displayValue[0];
        },
        onClose: function () {
        }
      });
      $("#gifName").picker({
        title: "请选择礼品名称",
        cols: [
          {
            textAlign: 'center',
            values: this.gifNameOptions
          }
        ],
        onChange: function (input) {
          self.deviceInfo.gifName = input.displayValue[0];
        },
        onClose: function () {
        }
      });
    }

  }
</script>

<style lang="less">
  @import '../less/regis_device.less';
</style>
