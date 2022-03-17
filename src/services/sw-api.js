const baseUrl = 'https://swapi.dev/api/'

export function getAllStarShips() {
  return fetch(`${baseUrl}starships/`)
  .then(res => res.json())
}