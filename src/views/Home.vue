<template>
  <div class="home" :style="imgSize">
    <div>
      <info-card class="infoCard" prizeTitle="华为P20双摄全面屏手机 6GB+128GB 极光色" prizePrice="3888" :bordered="true"></info-card>
      <info-card class="infoCard" prizeName="二等奖" prizeImg="/img/prize/No9.jpg" prizeTitle="小米定制版 Ninebot 智能体感9号平衡车" prizePrice="1999" :prizeNumber="2"></info-card>
      <info-card class="infoCard" prizeName="三等奖" prizeImg="/img/prize/mi.jpg" prizeTitle="小米静音智能除甲醛 雾霾 空气净化器Pro" prizePrice="1499" :prizeNumber="3"></info-card>
      <div class="clear"></div>
    </div>
    <div style="position: relative">
      <div v-for="luck in lucks">
        <lucky :avatar="luck.avatar" :HW="luck.hw" :a-top="luck.t" :a-left="luck.l" :a-p="luck.o"> </lucky>
      </div>
    </div>
  </div>
</template>

<script>
import infoCard from '@/components/infoCard'
import lucky from '@/components/Lucky'

export default {
  name: 'home',
  components: {
    infoCard,
    lucky
  },
  data () {
    return {
      imgSize: {
        height: document.documentElement.clientHeight + 'px',
        maxHeight: document.documentElement.clientHeight + 'px',
        width: document.documentElement.clientWidth + 'px',
        overflow: 'hidden'
      },
      lucks: [
        { avatar: '/img/prize/owner/default.jpg', hw: this.getRandom(300, 100), t: this.getRandom(320, 0), l: this.getRandom(1575, 0), o: Math.random() + 0.3 },
        { avatar: '/img/prize/owner/default.jpg', hw: this.getRandom(300, 100), t: this.getRandom(320, 0), l: this.getRandom(1575, 0), o: Math.random() + 0.3 },
        { avatar: '/img/prize/owner/default.jpg', hw: this.getRandom(300, 100), t: this.getRandom(320, 0), l: this.getRandom(1575, 0), o: Math.random() + 0.3 },
        { avatar: '/img/prize/owner/default.jpg', hw: this.getRandom(300, 100), t: this.getRandom(320, 0), l: this.getRandom(1575, 0), o: Math.random() + 0.3 }
      ]
    }
  },
  mounted () {
  },
  methods: {
    getRandom: function (upNumber, lowNumber) {
      let tmp
      if (upNumber < lowNumber) {
        tmp = upNumber
        upNumber = lowNumber
        lowNumber = tmp
      }
      return Math.floor(Math.random() * (upNumber - lowNumber + 1) + lowNumber)
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="less">
  .clear {
    clear: both;
  }
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
