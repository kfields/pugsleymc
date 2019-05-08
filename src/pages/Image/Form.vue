<template>
  <div class="fields">
      <q-input outlined autocomplete="title" v-model="image.title" label="Title" />
      <q-input outlined autocomplete="filename" v-model="image.filename" label="Filename" />
  </div>
</template>

<script>
import { UiMixin } from 'src/mixins'

export default {
  mixins: [ UiMixin ],
  props: {
    image: {
      default () {
        return {
          title: '',
          filename: ''
        }
      }
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>
