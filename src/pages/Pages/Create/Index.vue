<template>
  <q-page padding>
    <Form :post="this.post" />
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'
import Form from '../Form'

import gql from 'graphql-tag'

export default {
  name: 'CreatePost',
  mixins: [ UiMixin, PageMixin ],
  props: [],
  components: {
    Form
  },
  data () {
    return {
      title: 'New Page',
      post: {
        title: '',
        summary: '',
        body: ''
      }
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(from)
      if (from.name !== 'html') {
        vm.post = { title: '', summary: '', body: '' }
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setPage(this.post)
    console.log('leaving')
    next()
  },
  methods: {
    save () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($title: String, $summary: String, $body: String) {
            createPost(title: $title, summary: $summary, body: $body) {
              id
            }
          }`,
        // Parameters
        variables: {
          title: this.post.title,
          summary: this.post.summary,
          body: this.post.body
        }
      }).then((data) => {
        console.log(data)
        this.id = data.data.createPost.id
        this.$q.notify('Page Created')
        // this.$router.push(`/pages/${this.id}`)
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
      var post = this.page
      console.log('on switch')
      if (post) {
        console.log('yes')
        this.post = post
      }
      console.log(this.post)
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
