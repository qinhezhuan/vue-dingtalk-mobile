<template>
  <div style="padding: 0rem .2rem">
    <div style="padding-top: .5rem">
      <mt-field style="float: left; width: 80%; padding-right: .5rem" label="提单号：" placeholder="请输入提单号" v-model="ticketNo"></mt-field>
      <mt-button style="float: left; width: 20%" plain type="primary">查询</mt-button>
      <div style="clear:both"></div>
    </div>
    <div>
      <mt-field style="float: left; width: 75%; padding-right: .5rem" label="车号：" placeholder="请输入车号" v-model="carNo"></mt-field>
      <mt-button style="float: left; width: 25%" type="primary">省简称</mt-button>
      <div style="clear:both"></div>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        扫描正常钢卷<mt-badge size="normal"type="primary">30</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="2">
        扫描异常钢卷<mt-badge size="normal" type="error">30</mt-badge>
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-if="inited" v-model="selected" :style="itemStyle">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 10" :title="'测试 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <div>
      <mt-button style="float: left; width: 30%" type="primary">提单扫描</mt-button>
      <span style="float: left; width: 5%">&nbsp;</span>
      <mt-button style="float: left; width: 30%" type="primary">钢卷扫描</mt-button>
      <span style="float: left; width: 5%">&nbsp;</span>
      <mt-button style="float: left; width: 30%" type="primary">发货确认</mt-button>
      <div style="clear:both"></div>
    </div>    
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'OutStore',
  data() {
    return {
      inited: false,
      ticketNo: '',
      carNo: '',
      selected: '1',
      itemStyle: ''
    }
  },
  created: function () { 	
  },
  mounted: function () {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.itemStyle = `height: ${h-186}px; overflow:scroll`;
    this.inited = true;
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
/deep/ .mint-field .mint-cell-title {
  width: 4.5rem!important;
}

/deep/ .mint-navbar .mint-tab-item {
  padding: 8px 0px!important;
}

/deep/ .mint-tab-item-label {
  font-size: 15px!important;
}
</style>
