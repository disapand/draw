<template>
  <div class="infoCard" v-bind:class="{infoCardBordered: bordered}">
    <div class="img">
      <div class="prizeImg" v-bind:style="prizeImgShow"></div>
    </div>
    <div class="info">
      <h1 class="prizeName">{{ prizeName }}</h1>
      <p class="prizeTitle">{{ prizeTitle }}</p>
      <span class="prizePrice">￥{{ prizePrice }}元</span>
      <div class="prizeOwners">
        <img :src="prizeOwner" alt="获奖者" title="虚位以待" class="prizeOwner" v-for="index in prizeNumber" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoCard',
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    prizeName: {
      type: String,
      default: '一等奖'
    },
    prizeNumber: {
      type: Number,
      default: 1
    },
    prizeImg: {
      type: String,
      default: '/img/prize/p20.png'
    },
    prizeTitle: {
      type: String,
      default: '这是一等奖的奖品'
    },
    prizePrice: {
      type: String,
      default: '9999.99'
    },
    prizeOwner: {
      type: String,
      default: '/img/prize/owner/default.jpg'
    }
  },
  data () {
    return {
      prizeImgShow: {
        background: 'url(' + this.prizeImg + ') no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .infoCard {
    background-color: #fff;
    padding: 30px;
    display: flex;
    cursor: pointer;
    &:hover {
      box-shadow: 3px 3px 5px rgba(0, 0, 0, .3);

      .prizeName:after {
        width: 100%;
        transition: width 0.2s ease-in-out;
      }
    }
  }
  .infoCardBordered {
    border: solid 5px #0094d8;
  }

  .img {
    padding: 30px;
  }

  .info {
    flex: 1;
    padding: 0 10px;
  }

  .prizeImg {
    width: 180px;
    height: 180px;
  }

  .prizeName {
    position: relative;
    &:after, &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      bottom: 0;
      background: #000;
    }
    &:after {
      width: 0%;
      background: #0094d8;
      transition: all 0.2s ease-in-out;
    }
  }

  .prizeTitle {
    padding: 10px 0;
    color: #333;
    font-size: 1rem;
  }

  .prizePrice {
    color: #999;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .prizeOwners {
    height: 100px;
    margin-top: 10px;
    text-align: center;
  }

  .prizeOwner {
    width: 96px;
    margin: 0 15px;
    border-radius: 50%;
  }
</style>
