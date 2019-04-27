import axios from 'axios'
import jwtDecode from 'jwt-decode'

const state = {
  isLoggedIn: false,
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
  logIn: ({ commit }, { username, password }) => {
    commit('logIn') // show spinner
    return new Promise(resolve => {
      axios.post(`${process.env.API_URL}/token-auth/`, {
        username: username,
        password: password
      })
        .then((response) => {
          console.log('Well done!')
          console.log(response)
          commit('logInSuccess', response.data)
          resolve()
        })
        .catch(function (error) {
          console.log(error)
        })
    })
  },
  logOut: ({ commit }) => {
    localStorage.removeItem('user')
    commit('logOut')
  }
}

const mutations = {
  logIn: (state) => {
    state.pending = true
  },
  logInSuccess: (state, data) => {
    const token = data.token
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
