<template>
  <q-drawer
    v-model="leftDrawerOpen"
    content-class="drawer"
  >
    <q-list>
      <q-item to="/" exact>
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/users">
        <q-item-section avatar>
          <q-icon name="mdi-account-multiple" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Users</q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/pages">
        <q-item-section avatar>
          <q-icon name="mdi-folder-open" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Pages</q-item-label>
        </q-item-section>
      </q-item>

      <q-item to="/images">
        <q-item-section avatar>
          <q-icon name="mdi-folder-image" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Images</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </q-drawer>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'LeftDrawer',
  mixins: [ UiMixin ],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  beforeMount () {
  },
  mounted () {
  }
}
</script>

<style>
</style>
