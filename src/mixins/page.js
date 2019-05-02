import Toolbar from 'components/DefaultToolbar'

export default {
  mounted () {
    this.setPageTitle(this.title)
    this.onSwitch()
    if (this.persist) {
      const persist = this.persist
      const names = Object.getOwnPropertyNames(persist)
      for (var name in names) {
        this[name] = persist[name]
      }
    }
  },
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
