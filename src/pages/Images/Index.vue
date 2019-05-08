<template>
  <q-page padding>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-item v-for="edge in allImages.edges" :key="edge.id" :to="`/images/${edge.node.id}`">
          <q-item-section avatar>
            <q-icon name="mdi-image" inverted color="grey-6" />
          </q-item-section>
          <q-item-section>
            {{ edge.node.title }}
          </q-item-section>
      </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'

import gql from 'graphql-tag'
const imageQuery = gql`
query imageQuery {
  allImages {
    edges {
      node {
        id
        title
      }
    }
  }
}
`
export default {
  name: 'Posts',
  mixins: [ UiMixin, PageMixin ],

  data () {
    return {
      title: 'Images',
      authorId: this.$route.params.authorId
    }
  },
  apollo: {
    allImages: {
      query: imageQuery,
      fetchPolicy: 'network-only',
      variables () {
        return { authorId: this.authorId }
      }
    }
  },
  methods: {
    onSwitch () {
      this.setPage(this)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
