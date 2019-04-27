import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

// "async" is optional
export default async ({ app, Vue }) => {
  const apolloClient = new ApolloClient({
    uri: process.env.GRAPHQL_URL
  })
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })
  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
}
