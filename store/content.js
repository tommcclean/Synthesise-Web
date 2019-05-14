export const state = () => ({
  show: true,
  tile: {
    title: 'Twitter',
    colour: 'blue',
    icon: 'https://www.twitter.com/favicon.ico',
    url: 'https://www.twitter.com'
  }
})

export const mutations = {
  toggleContentEditor(state) {
    state.show = !state.show
  }
}

export const actions = {
  toggleContentEditor: ({
    commit
  }) => {
    commit('toggleContentEditor')
  }
}
