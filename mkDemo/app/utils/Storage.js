import { AsyncStorage } from 'react-native'

/**
 *
 * @param {string} key
 */
function getStorage(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key, (err,value) => {
      if (!err) {
        resolve(value)
      } else {
        reject(err)
      }
    })
  })
}
/**
 *
 * @param {Array} value
 */
function getAllStorageKey() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getAllKeys((err, value) => {
      console.log(err, value)
      if (!err) {
        resolve(value)
      } else {
        reject(err)
      }
    })
  })
}

function setSStorage() {}
function removeStorage() {}

export default {
  getAllStorageKey
}
