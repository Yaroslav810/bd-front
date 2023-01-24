import { serverPath } from './api'

function getImage(id: string) {
  return serverPath + '/images/' + id
}

export {
  getImage
}
