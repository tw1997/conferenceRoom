import TIscroll from './index.vue'

export default {
  install (Vue, options = {}) {
    Vue.prototype.$afterRouteLeave = () => {
      setTimeout(() => {
        TIscroll.methods.modifyHeight()
      }, 0)
    }
    Vue.component(TIscroll.name, TIscroll)
    Vue.mixin({
      created () {
        TIscroll.methods.modifyHeight()
      }
    })
  }
}