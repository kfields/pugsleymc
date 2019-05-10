<template>
  <q-page padding>
    <div v-if="$apollo.loading">Loading..</div>
    <div v-else class="fields">
      <q-input outlined autocomplete="username" v-model="user.username" label="Username" />
      <q-input outlined autocomplete="email" v-model="user.email" label="Email" />
      <q-input outlined autocomplete="firstname" v-model="user.firstName" label="First Name" />
      <q-input outlined autocomplete="lastname" v-model="user.lastName" label="Last Name" />
    </div>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './Toolbar'

import gql from 'graphql-tag'
const userQuery = gql`
query userQuery($id: ID!) {
  user(id: $id) {
    username
    email
    firstName
    lastName
  }
}
`
export default {
  mixins: [ UiMixin, PageMixin ],
  props: ['id'],
  components: {
  },
  apollo: {
    user: {
      query: userQuery,
      variables () {
        return {
          id: this.userId
        }
      }
    }
  },
  data () {
    return {
      title: 'User',
      userId: this.$route.params.id
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
        mutation: gql`mutation ($id: ID!, $username: String, $email: String, $firstName: String, $lastName: String) {
          updateUser(id: $id, username: $username, email: $email, firstName: $firstName, lastName: $lastName) {
            ok
          }
        }`,
        // Parameters
        variables: {
          id: this.id,
          username: this.user.username,
          email: this.user.email,
          firstName: this.user.firstName,
          lastName: this.user.lastName
        }
      })
      console.log('Saved')
    },
    onSwitch () {
      this.setView(this)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
