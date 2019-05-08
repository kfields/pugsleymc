<template>
  <q-page padding>
    <FilePond ref="pond" :v-model="files" :server="server" />
  </q-page>
</template>

<script>
import VueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'

export default {
  name: 'CreateImage',
  mixins: [ UiMixin, PageMixin ],
  props: [],
  components: {
    FilePond: VueFilePond(FilePondPluginImagePreview)
  },
  data () {
    return {
      title: 'Add Images',
      server: process.env.SERVER_URL + '/filepond',
      files: []
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
    })
  },
  beforeRouteLeave (to, from, next) {
    next()
  },
  methods: {
    onSwitch () {
      this.setPage(this)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
