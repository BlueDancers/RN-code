import Storage from './Storage'
import value from './data/keys.json'

let config = {
  pupdata: 'pup'
}

// 初始化数据
/**
 * @param {string} key
 */
function initData(key) {
  if (key == config.pupdata) {
    return initdata_pup()
  }
}

async function initdata_pup() {
  try {
    const res = await Storage.getStorage(config.pupdata)
    if (res) {
      // Storage.setStorage('pup', JSON.stringify(value))
      return res
    } else {
      // 数据不存在就添加数据
      Storage.setStorage('pup', JSON.stringify(value))
        .then(() => {
          return initdata_pup()
        })
        .catch(res_1 => {
          console.error(res_1)
          return res_1
        })
    }
  } catch (res_2) {
    console.error(res_2)
    return res_2
  }
}

export { config, initData }
