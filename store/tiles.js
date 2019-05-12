export const state = () => ({
  tiles: [
    {
      title: 'BBC',
      colour: 'purple',
      icon: 'https://www.bbc.co.uk/favicon.ico',
      url: 'https://www.bbc.co.uk'
    },
    {
      title: 'Google',
      colour: 'black',
      icon: 'https://www.google.co.uk/favicon.ico',
      url: 'https://www.google.co.uk'
    },
    {
      title: 'Facebook',
      colour: 'blue',
      icon: 'https://www.facebook.com/favicon.ico',
      url: 'https://www.facebook.com'
    },
    {
      title: 'Shine',
      colour: 'orange',
      icon: 'https://www.shineproject.io/favicon.ico',
      url: 'https://shineproject.io'
    },
    {
      title: 'Youtube',
      colour: 'red',
      icon: 'https://www.youtube.com/favicon.ico',
      url: 'https://www.youtube.com'
    },
    {
      title: 'Twitter',
      colour: 'blue',
      icon: 'https://www.twitter.com/favicon.ico',
      url: 'https://www.twitter.com'
    }
  ]
})

export const mutations = {
  remove(state, { todo }) {
    state.tiles.splice(state.list.indexOf(todo), 1)
  }
}
