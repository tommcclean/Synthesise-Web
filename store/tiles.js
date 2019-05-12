export const state = () => ({
  tiles: [
    {
      title: 'BBC',
      colour: 'purple',
      icon: 'https://www.bbc.co.uk/favicon.ico'
    },
    {
      title: 'Google',
      colour: 'black',
      icon: 'https://www.google.co.uk/favicon.ico'
    },
    {
      title: 'Facebook',
      colour: 'blue',
      icon: 'https://www.facebook.com/favicon.ico'
    },
    {
      title: 'Shine',
      colour: 'orange',
      icon: 'https://www.shineproject.io/favicon.ico'
    },
    {
      title: 'Youtube',
      colour: 'red',
      icon: 'https://www.youtube.com/favicon.ico'
    },
    {
      title: 'Twitter',
      colour: 'blue',
      icon: 'https://www.twitter.com/favicon.ico'
    }
  ]
})

export const mutations = {
  remove(state, { todo }) {
    state.tiles.splice(state.list.indexOf(todo), 1)
  }
}
