<template>
  <div>
    <mt-swipe :auto="5000" style="width:100%; height:3.6rem;">
      <mt-swipe-item v-for="(color,index) in swipeColors" :key="index" :style="{background:color, textAlign:'center', lineHeight:'3.6rem', fontSize:'1.2rem'}">{{index+1}}</mt-swipe-item>
    </mt-swipe>
    <mt-button style="padding:0 .15rem;" @click="QRCode">扫一扫</mt-button>
    <mt-button style="padding:0 .15rem;" @click="getGPS">获取定位信息</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeColors:[
        '#0089dc','#ff2d4b','#ffd705'
      ],
    }
  },
  components:{
  },  
  computed:{
  },
  mounted(){
  },
  methods:{
    QRCode(){
      let vthis = this;
      this.fetch({
        method: 'get',
        url: '/weixin/scan',
        params: {
          // 生成签名需要的参数，这个域名必须通过微信验证
          url: window.location.href.split('#')[0]
        }
      }).then(res => {
        const data = res.data.data;
        vthis.wx.config({
          // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          debug: false,
          // 必填，公众号的唯一标识
          appId: data.appId,
          // 必填，生成签名的时间戳
          timestamp: "" + data.timestamp,
          // 必填，生成签名的随机串
          nonceStr: data.nonceStr,
          // 必填，签名
          signature: data.signature,
          // 必填，需要使用的JS接口列表，所有JS接口列表
          jsApiList: ['scanQRCode']
        });

        vthis.wx.error(function(res) {
          //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
          alert("出错了：" + res.errMsg);
        });

        vthis.wx.ready(function() {
          vthis.wx.scanQRCode({
            // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
            needResult: 1,
            // 可以指定扫二维码还是一维码，默认二者都有
            scanType: ["qrCode","barCode"], 
            success: function (res) {
              // 当needResult 为 1 时，扫码返回的结果
              // var result = res.resultStr;
              console.log(res)
              alert(JSON.stringify(res))
            },
            error: function (err) {
            }
          });
        });
        console.log(data);
      }).catch(err => {
        console.log(err,'异常')
      })
    },
    getGPS(){
      this.wx.getLocation({
        // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        type: 'wgs84',
        success: function (res) {
          // 纬度，浮点数，范围为90 ~ -90
          //var latitude = res.latitude;
          // 经度，浮点数，范围为180 ~ -180。
          //var longitude = res.longitude;
          // 速度，以米/每秒计
          //var speed = res.speed;
          // 位置精度
          //var accuracy = res.accuracy;
          console.log(res)
          alert(JSON.stringify(res))
        },
        error: function (err) {
        }
      });
    }
  }
}
</script>

<style lang="scss">
  body,html {
    margin:0;
    padding:0;
  }
</style>
