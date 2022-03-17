const baseUrl = 'https://swapi.dev'

export function getAllStarShips() {
  return fetch(`${baseUrl}/api/starships/`)
  .then(res => res.json())
}