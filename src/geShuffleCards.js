function getShuffledCards(data) {
  return [...data, ...data]
    .sort(() => Math.random() - 0.5)
    .map((item) => ({ ...item, id: Math.random() }))
}