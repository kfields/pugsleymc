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
  mixins: [ UiMixin, PageMixin ],
  props: ['id'],
  components: {
    Form
  },
  apollo: {
    post: {
      query: gql`
        query postQuery($id: ID!) {
          post(id: $id) {
            title
            slug
            summary
            body
          }
        }`,
      variables () {
        return {
          id: this.postId
        }
      }
    }
  },
  data () {
    return {
      title: 'Page',
      postId: this.$route.params.id
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    save () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!, $title: String, $summary: String, $body: String) {
            updatePost(id: $id, title: $title, summary: $summary, body: $body) {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id,
          title: this.post.title,
          summary: this.post.summary,
          body: this.post.body
        }
      })
      this.$q.notify('Page Saved')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deletePost(id: $id) {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('Page Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setPage(this)
      this.setToolbar(Toolbar)
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
