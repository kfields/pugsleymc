<template>
  <q-page padding>
    <Form :image="this.image" />
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
    image: {
      query: gql`
        query imageQuery($id: ID!) {
          image(id: $id) {
            title
            filename
          }
        }`,
      variables () {
        return {
          id: this.imageId
        }
      }
    }
  },
  data () {
    return {
      title: 'Page',
      imageId: this.$route.params.id
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
          mutation ($id: ID!, $title: String) {
            updateImage(id: $id, title: $title) {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id,
          title: this.image.title
        }
      })
      this.$q.notify('Image Saved')
    },
    destroy () {
      this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation ($id: ID!) {
            deleteImage(id: $id) {
              ok
            }
          }`,
        // Parameters
        variables: {
          id: this.id
        }
      }).then((data) => {
        this.$q.notify('Image Deleted')
        this.$router.go(-1)
      })
    },
    onSwitch () {
      this.setPage(this)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
