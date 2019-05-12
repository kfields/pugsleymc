<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      @click="$router.go(-1)"
    >
      <q-icon name="mdi-chevron-left" />
    </q-btn>

    <q-toolbar-title shrink>
      {{view.title}}
    </q-toolbar-title>

    <q-btn
      flat
      dense
      round
      @click="view.save()"
      aria-label="Save"
    >
      <q-icon name="save" />
    </q-btn>

    <q-btn
      flat
      dense
      round
      @click="view.destroy()"
      aria-label="Save"
    >
      <q-icon name="delete" />
    </q-btn>

  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { mapActions } from 'vuex'
export default {
  name: 'DefaultToolbar',
  mixins: [
    UiMixin
  ],
  props: [],
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
