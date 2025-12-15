function getShuffleCards(data) {
  return [...data, ...data]
    .sort(() => Math.random() - 0.5)
    .map((item) => ({ ...item, id: Math.random() }))
}
export default getShuffleCards