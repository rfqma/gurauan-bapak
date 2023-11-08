export const getRandomJoke = async () => {
  try {
    const url = `https://jokes-bapack2-api.yuana.id/v1/text/random?timestamp=${new Date().getTime()}`
    const response = await fetch(url, { method: 'GET' })

    if (!response.ok) {
      throw new Error('network response was not ok')
    }

    const data = await response.json()

    console.log('success fetching random joke: ', data.data)
    return data.data
  } catch (error) {
    console.log('error fetching random joke: ', error)
    return null
  }
}