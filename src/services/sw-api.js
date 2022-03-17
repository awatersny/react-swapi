const baseUrl = 'https://swapi.dev/api/'

export function getAllStarShips() {
  return fetch(`${baseUrl}starships/`)
  .then(res => res.json())
}

export function getStarShipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}