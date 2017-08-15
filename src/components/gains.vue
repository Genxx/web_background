<template>
  <div id="gains" v-title data-title="设备管理">
    <ul class="times-list">
      <li id="today" @click="_today()" :class="liNum==1?'active': ''">今日</li>
      <li id="yesterday" @click="_yesterday()" :class="liNum==2?'active': ''">昨天</li>
      <li id="week" @click="_week()" :class="liNum==3?'active': ''">本周</li>
      <li id="month" @click="_month()" :class="liNum==4?'active': ''">本月</li>
      <li id="halfAYear" @click="_halfAYear()" :class="liNum==5?'active': ''">半年</li>
    </ul>
    <div class="time">
      <p class="fl">时间</p>
      <div class="fl mr0">
        <!--<span @click="_freechoce()" id="dt-start">{{startTime}}</span>至 <span @click="_freechoce2()" id="dt-end">{{endTime}}</span>-->
        <input type="text" id="dt-start" v-model="startTime" @click = "_freechoce">至 <input type="text" id="dt-end" v-model="endTime" @click="_freechoce2()">
      </div>
    </div>
    <div class="place">
      <p class="fl">场地</p>
      <input class="weui-input fl mr0" type="text" value="全部" @click="_showPlace()" id="show-place"/>
    </div>
    <div class="gains-detail" v-for="item in bill">
      <div class="tit">
        <p class="fl tit-name">{{item.field}}</p>
        <span class="fl tit-num">{{item.num}}台</span>
        <p class="fr">合计 : {{item.sum}}元</p>
      </div>
      <ul class="list">
        <li class="list-online">
          <p class="fl">在线支付</p>
          <p class="fr">{{item.onlinePayment}}元</p>
        </li>
        <li class="list-ad">
          <p class="fl">广告收益</p>
          <p class="fr">
            <span class="col">分发0次,</span>
            <span>{{item.adRevenue}}元</span>
          </p>
        </li>
        <li class="list-money">
          <p class="fl">
            <span>现金收益</span>
            <span class="fs">(仅兑币机)</span>
          </p>
          <p class="fr">{{item.cashIncome}}元</p>
        </li>
      </ul>
      <div class="sum">
        <p class="fl">合计投币</p>
        <div class="fr">
          <p>{{item.coin}}个</p>
          <p class="col">线上(含广告币{{item.adlineCoin}}个){{item.onlineCoin}}个,线下{{item.lineCoin}}个</p>
        </div>
      </div>
      <div class="gif-use">
        <p class="fl">礼品消耗</p>
        <p class="fr">{{item.giftNum}}个,{{item.gifMoney}}元</p>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import jw from 'vue-weui'
  import Calendar from 'vue2-datepick';

  Vue.use(Calendar);

  function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    return getDataFormat(dd);
  }

  function getDataFormat(data) {
    var y = data.getFullYear();
    var m = data.getMonth() + 1;//获取当前月份的日期
    var d = data.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
  }

  export default {

    components: {},
    data() {
      return {
        startTime: '',
        endTime: '',
        liNum: 1,
        fieldList:['全部', 'test', 'test2', '考拉3'],
        bill:[{
          field:"考拉",
          num:2,
          sum:0,
          onlinePayment:0,
          adRevenue:0,
          cashIncome:0,
          coin:0,
          onlineCoin:0,
          adlineCoin:0,
          lineCoin:0,
          giftNum:0,
          gifMoney:0,
        },
          {
            field:"考拉",
            num:2,
            sum:0,
            onlinePayment:0,
            adRevenue:0,
            cashIncome:0,
            coin:0,
            onlineCoin:0,
            adlineCoin:0,
            lineCoin:0,
            giftNum:0,
            gifMoney:0,
          }
        ]
      }
    },
    methods: {
      _showPlace() {
//      $("#show-place").picker("close")
      },
      _place() {
        $("#show-place").picker({
          title: "请选择区域",
          cols: [
            {
              textAlign: 'center',
              values:this.fieldList
            }
            ],
          onChange: function () {
          },
          onClose: function () {
            console.log("close");
          }
        })
      },
      _today() {
        this.liNum = 1;
        this.startTime = (GetDateStr(0));
        this.endTime = (GetDateStr(0));
      },
      _yesterday() {
        this.liNum = 2;
        this.startTime = (GetDateStr(-1));
        this.endTime = (GetDateStr(-1));

      },
      _week() {
        this.liNum = 3;
        let now = new Date();
        now.setDate(now.getDate());
        let nowDayOfWeek = now.getDay();
        now.setDate(now.getDate() - nowDayOfWeek);
        this.startTime = getDataFormat(now);
        let now2 = new Date();
        now2.setDate(now2.getDate());
        now2.setDate(now2.getDate() + (6 - nowDayOfWeek))
        this.endTime = getDataFormat(now2);
      },
      _month() {
        this.liNum = 4;
        let now = new Date();
        let date = now.getDate();
        let fullYear = now.getFullYear();
        let month = now.getMonth();
        this.startTime = GetDateStr(1 - date);
        let endOfMonth = new Date(fullYear, month, 0).getDate();
        this.endTime = GetDateStr(endOfMonth - date);
      },
      _halfAYear() {
        let now = new Date();
        this.startTime = GetDateStr(-184);
        this.liNum = 5;
        this.endTime = (GetDateStr(0));
      },
      _freechoce() {
//        let vm = this;
//        this.$calendar.show({
//          onOk(data) {
//            console.log(data)
//            vm.startTime = data.year + '-' + (data.month < 10 ? '0' + data.month : data.month) + '-' + (data.day < 10 ? '0' + data.day : data.day)
//            console.log('确定')
//          },
//          onCancel() {
//            console.log('取消')
//          },
//          year: 2015,
//          month: 2,
//          day: 20,
//        })
        $("#dt-start").calendar({
          onChange: function (p, values, displayValues) {
            console.log(values, displayValues);
          }
        });
      },
      _freechoce2() {
        $("#dt-end").calendar({
          onChange: function (p, values, displayValues) {
            console.log(values, displayValues);
          }
          });
      }
    },
    mounted() {
      this.startTime = GetDateStr(0);
      this.endTime = GetDateStr(0);
      $("#show-place").picker({
        title: "请选择场地",
        cols: [
          {
            textAlign: 'center',
            values: this.fieldList
          }
        ],
        onChange: function () {
        },
        onClose: function () {
          console.log("close");
        }
      })
    }
  }
</script>

<style lang="less">
  @import '../less/gains.less';
</style>

