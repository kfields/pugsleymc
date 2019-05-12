import Toolbar from 'components/DefaultToolbar'

// const pageData = {}

export default {
  mounted () {
    this.setView(this)
    this.onSwitch()
    /*
    if (this.persist) {
      const persist = this.persist
      const names = Object.getOwnPropertyNames(persist)
      for (var name in names) {
        this[name] = persist[name]
      }
    } */
  },
  /*
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('entering')
      console.log(vm)
      if (vm.persist) {
        const persist = vm.persist
        const data = pageData[vm.$vnode.tag]
        if (!data) return
        for (var i = 0; i < persist.length; i++) {
          const prop = persist[i]
          vm[prop] = data[prop]
        }
        console.log(data)
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log('leaving')
    if (this.persist) {
      const persist = this.persist
      const data = pageData[this.$vnode.tag] = {}
      for (var i = 0; i < persist.length; i++) {
        const prop = persist[i]
        data[prop] = this[prop]
      }
      console.log(data)
    }
    next()
  },
  */
  beforeRouteUpdate (to, from, next) {
    this.onSwitch()
    next()
  },
  methods: {
    onSwitch () {
      this.setToolbar(Toolbar)
    }
  }
}
