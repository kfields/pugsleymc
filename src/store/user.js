// import axios from 'axios'
import jwtDecode from 'jwt-decode'
import gql from 'graphql-tag'

const state = {
  isLoggedIn: false,
  pending: false,
  user: null
}

const getters = {
  isLoggedIn: (state) => {
    return state.isLoggedIn
  },
  user: (state) => {
    return state.user
  }
}

const actions = {
  /*
  logIn: ({ commit }, { username, password }) => {
    commit('logIn') // show spinner
    return new Promise(resolve => {
      axios.post(`${process.env.API_URL}/auth/token`, {
        username: username,
        password: password
      })
        .then((response) => {
          console.log(response)
          const data = response.data
          console.log('Well done!')
          state.isLoggedIn = true
          commit('logInSuccess', data)
          resolve()
        })
        .catch(function (error) {
          console.log(error)
        })
    })
  }, */
  logIn: (info, { username, password }) => {
    const { commit, rootState } = info
    console.log(info)
    commit('logIn') // show spinner
    return new Promise(resolve => {
      rootState.apolloProvider.defaultClient.mutate({
        // Query
        mutation: gql`
          mutation ($username: String, $password: String) {
            logIn(username: $username, password: $password) {
              token
            }
          }`,
        // Parameters
        variables: {
          username,
          password
        }
      }).then((data) => {
        console.log(data)
        state.isLoggedIn = true
        commit('logInSuccess', data.data.logIn)
        resolve()
      })
    })
  },
  logOut: ({ commit }) => {
    localStorage.removeItem('user')
    localStorage.removeItem('user-token')
    commit('logOut')
  }
}

const mutations = {
  logIn: (state) => {
    state.pending = true
  },
  logInSuccess: (state, data) => {
    const token = data.token
    localStorage.setItem('user-token', token)
    const user = jwtDecode(token)
    user.token = token

    console.log('Token', token)
    console.log('User', user)

    localStorage.setItem('user', user)
    state.user = user

    state.isLoggedIn = true
    state.pending = false
  },
  logOut: (state) => {
    state.isLoggedIn = false
    state.user = null
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
