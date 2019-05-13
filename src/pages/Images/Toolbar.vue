<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      @click="toggleLeftDrawer"
      aria-label="Menu"
    >
      <q-icon name="menu" />
    </q-btn>

    <q-toolbar-title shrink>
      {{view.title}}
    </q-toolbar-title>

    <q-btn
      flat
      dense
      round
      @click="$router.push('/images/create')"
      aria-label="Save"
    >
      <q-icon name="mdi-image-plus" />
    </q-btn>

  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'DefaultToolbar',
  mixins: [
    UiMixin
  ],
  props: [],
  methods: {
  }
}
</script>
