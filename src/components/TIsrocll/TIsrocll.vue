<template>
  <div class="t-iscroll">
    <div id="t-iscroll-wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll'
  export default {
    name: 'TIScroll',
    data () {
      return {
      }
    },
    components: {
    },
    mounted () {
      window.iScroll = new IScroll('#t-iscroll-wrapper', {
        mouseWheel: true,
        scrollbars: true,
        fade: true
      })
      this.modifyHeight()
    },
    beforeRouteLeave (to, from, next) {
      window.iScroll.scrollTo(0, 0)
      next()
    },
    methods: {
      modifyHeight (height) {
        let div = document.querySelector('#t-iscroll-wrapper>div')
        if (div) {
          let viewHeight, minHeiht
          if (typeof height === 'number') {
            minHeiht = height
          }
          viewHeight = document.querySelector('.view').clientHeight + 40
          if (minHeiht > viewHeight) {
            div.style.height = minHeiht + 'px'
          } else {
            div.style.height = viewHeight + 'px'
          }
          if (window.iScroll) {
            window.iScroll.refresh()
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #t-iscroll-wrapper{
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    >div{
      overflow: hidden;
    }
  }
</style>
