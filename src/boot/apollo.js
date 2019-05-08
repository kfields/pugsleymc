import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

// "async" is optional
export default async ({ app, store, Vue }) => {
  const apolloClient = new ApolloClient({
    uri: process.env.SERVER_URL + '/graphql/',
    fetchOptions: {
      credentials: 'include'
    },
    request: async (operation) => {
      const token = await localStorage.getItem('user-token')
      operation.setContext({
        headers: {
          authorization: token
        }
      })
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors)
      }
      if (networkError) {
        console.log(networkError)
      }
    }
  })
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })
  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
  store.state.apolloProvider = apolloProvider
}
