<template>
  <div class="fields">
      <q-input outlined autocomplete="title" v-model="post.title" label="Title" />
      <q-input outlined v-model="post.summary" label="Summary" />
      <q-field outlined label="Body" stack-label @click.native="editBody()">
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">{{stripTags(post.body)}}</div>
        </template>
      </q-field>
  </div>
</template>

<script>
import { UiMixin } from 'src/mixins'

export default {
  mixins: [ UiMixin ],
  props: {
    post: {
      default () {
        return {
          id: '',
          title: '',
          summary: '',
          body: ''
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
    editBody () {
      this.setEdited({ object: this.post, prop: 'body' })
      this.$router.push(`/pages/${this.post.id}/html`)
    },
    stripTags (str) {
      if ((str === null) || (str === '')) {
        return ''
      } else {
        str = str.toString()
        return str.replace(/<[^>]*>/g, '')
      }
    }
  }
}
</script>
