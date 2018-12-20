<template>
  <div class="home" v-bind:style="imgSize">
    <div style="margin: 0 auto">
      <info-card class="infoCard" prizeTitle="华为P20双摄全面屏手机 6GB+128GB 极光色" prizePrice="3888" :bordered="true"></info-card>
      <info-card class="infoCard" prizeName="二等奖" prizeImg="/img/prize/No9.jpg" prizeTitle="小米9号平衡车" prizePrice="1999" :prizeNumber="2"></info-card>
      <info-card class="infoCard" prizeName="三等奖" prizeImg="/img/prize/mi.jpg" prizeTitle="小米空气净化器Pro" prizePrice="1499" :prizeNumber="3"></info-card>
    </div>
  </div>
</template>

<script>
import infoCard from '@/components/infoCard'

export default {
  name: 'home',
  components: {
    infoCard
  },
  data () {
    return {
      imgSize: {
        height: document.documentElement.clientHeight + 'px',
        width: document.documentElement.clientWidth + 'px'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .home{
    background: url('../assets/bg.jpg') no-repeat center center / cover;
    padding: 15px;
  }
  .infoCard {
    width: 30%;
    float: left;
    margin: 0 15px;
    &:first-child {
      margin-right: 30px;
    }
    &:last-child {
      margin-left: 30px;
    }
  }
</style>
