const randomHash = () =>
  Array(6).fill(0).map(() => Math.random().toString(36).substring(2, 6)).join('-')

const randomBetween = (min, max) =>
  min + Math.floor(Math.abs(max - min) * Math.random())

export const generateTokens = (cb) => {
  const cycle = () => setTimeout(() => {
    cb(randomHash())
    cycle()
  }, 1000 * randomBetween(10, 20))

  cb(randomHash()) // eager init
  cycle() // start
}
