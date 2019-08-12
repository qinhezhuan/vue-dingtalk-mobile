<template>
  <div>
    <mt-swipe :auto="5000" style="width:100%; height:3.6rem;">
      <mt-swipe-item v-for="(color,index) in swipeColors" :key="index" :style="{background:color, textAlign:'center', lineHeight:'3.6rem', fontSize:'1.2rem'}">{{index+1}}</mt-swipe-item>
    </mt-swipe>
    <mt-button style="padding:0 .15rem;" @click="QRCode">扫一扫</mt-button>
  </div>
</template>

<script>
export default {
  data(){
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
      this.DingTalkApi.biz.util.scan({
        type: "all" , // type 为 all、qrCode、barCode，默认是all。
        onSuccess: function(data) {
          console.log(data)
          alert(JSON.stringify(data))
        },
        onFail : function(err) {
        }
      })
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
