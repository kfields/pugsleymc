const state = {
  leftDrawerOpen: false,
  view: null,
  viewTitle: '',
  page: null,
  pageTitle: '',
  toolbar: null,
  editor: null,
  edited: null
}

const getters = {
  leftDrawerOpen: (state) => state.leftDrawerOpen,
  view: (state) => state.view,
  viewTitle: (state) => state.viewTitle,
  page: (state) => state.page,
  pageTitle: (state) => state.pageTitle,
  toolbar: (state) => state.toolbar,
  editor: (state) => state.editor,
  edited: (state) => state.edited
}

const actions = {
  setLeftDrawerOpen: (context, value) => {
    context.commit('setLeftDrawerOpen', value)
  },
  toggleLeftDrawer: ({ commit, state }) => {
    commit('setLeftDrawerOpen', !state.leftDrawerOpen)
  },
  setView: ({ commit }, data) => {
    commit('view', data)
  },
  setViewTitle: ({ commit }, data) => {
    commit('viewTitle', data)
  },
  setPage: ({ commit }, data) => {
    commit('page', data)
  },
  setPageTitle: ({ commit }, data) => {
    commit('pageTitle', data)
  },
  setToolbar: (context, toolbar) => {
    context.commit('setToolbar', toolbar)
  },
  setEditor: (context, editor) => {
    context.commit('setEditor', editor)
  },
  setEdited: (context, edited) => {
    context.commit('setEdited', edited)
  }
}

const mutations = {
  setLeftDrawerOpen: (state, data) => {
    state.leftDrawerOpen = data
  },
  view: (state, data) => {
    state.view = data
  },
  viewTitle: (state, data) => {
    state.viewTitle = data
  },
  page: (state, data) => {
    state.page = data
  },
  pageTitle: (state, data) => {
    state.pageTitle = data
  },
  setToolbar: (state, toolbar) => {
    state.toolbar = toolbar
  },
  setEditor: (state, editor) => {
    state.editor = editor
  },
  setEdited: (state, edited) => {
    state.edited = edited
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
