<template>
    <div class="lucky" :style="styles">
      <img :src="avatar" alt="" class="avatar">
    </div>
</template>

<script>
export default {
  name: 'Lucky',
  props: {
    avatar: {
      type: String,
      required: true
    },
    HW: {
      type: [String, Number],
      default: '100'
    },
    aLeft: {
      type: [String, Number],
      default: '0'
    },
    aTop: {
      type: [String, Number],
      default: '0'
    },
    aP: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    styles () {
      let style = {}
      style.width = this.HW + 'px'
      style.height = this.HW + 'px'
      style.left = this.aLeft + 'px'
      style.top = this.aTop + 'px'
      style.opacity = this.aP
      return style
    }
  }
}
</script>

<style scoped lang="less">
.lucky {
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
  .avatar {
    width: 100%;
  }
</style>
