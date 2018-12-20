<template>
  <div class="home" v-bind:style="imgSize">
    <info-card class="infoCard" prizeTitle="华为P20双摄全面屏手机 6GB+128GB 极光色" prizePrice="3888"></info-card>
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
  }
</style>
