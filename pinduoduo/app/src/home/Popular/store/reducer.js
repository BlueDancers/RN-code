import actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  swiper: [
    {
      img: require('../../../../public/images/Home/Popular/0c17288d4a879610343eae586fabbc70.webp')
    },
    {
      img: require('../../../../public/images/Home/Popular/23e66d95e126bac54960f8b58c60022b.webp')
    },
    {
      img: require('../../../../public/images/Home/Popular/5c0c9d938b49cc18fa1b77b3d4eaca56.webp')
    },
    {
      img: require('../../../../public/images/Home/Popular/edcaa84386e49f5854244c2b565bf075.webp')
    }
  ],
  barList: [
    [
      {
        img: require('../../../../public/images/Home/Popular/26c916947489c6b2ddd188ecdb54fd8d.webp'),
        text: '限时秒杀'
      },
      {
        img: require('../../../../public/images/Home/Popular/e1ecb559c183e2443b8c1866e708366e.webp'),
        text: '充值中心'
      }
    ],
    [
      {
        img: require('../../../../public/images/Home/Popular/67c60a1882411f9fc45765a0f7406141.webp'),
        text: '每日清仓'
      },
      {
        img: require('../../../../public/images/Home/Popular/a666ac01e718dd06231a722baa6fa935.webp'),
        text: '爱逛街'
      }
    ],
    [
      {
        img: require('../../../../public/images/Home/Popular/152611d19c6d53f94220d06b02a4d75e.webp'),
        text: '品牌馆'
      },
      {
        img: require('../../../../public/images/Home/Popular/c2ba677bcd16ecad6c335e5e04a1cf1e.webp'),
        text: '现金签到'
      }
    ],
    [
      {
        img: require('../../../../public/images/Home/Popular/92498f7f180eb07547f0d1735b7203c8.webp'),
        text: '多多果园'
      },
      {
        img: require('../../../../public/images/Home/Popular/d20eead7a6ffb6a7309707cf6ec0f97f.webp'),
        text: '食品超市'
      }
    ],
    [
      {
        img: require('../../../../public/images/Home/Popular/c671f2c49805658697cc0f72fff87eb3.webp'),
        text: '9块9特卖'
      },
      {
        img: require('../../../../public/images/Home/Popular/1bbff73a685197888f2b0805dc2a2df8.gif'),
        text: '电器城'
      }
    ],
    [
      {
        img: require('../../../../public/images/Home/Popular/6ee7aa359a495098f7c67af813e35f18.webp'),
        text: '天天半价购'
      },
      {
        img: require('../../../../public/images/Home/Popular/4ad66f8d7d28d6237a9f25b9a6d19f3e.webp'),
        text: '砍价免费拿'
      }
    ]
  ],
  activityPhoto: require('../../../../public/images/Home/Popular//activityPhoto.png'),
  stopList: [
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      stop: 'xxxx旗舰店',
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    },
    {
      img: require('../../../../public/images/Home/Popular/96f2dca329442071e7745f7831b7dbd1.jpg'),
      title: '[国行正品带票],iPhone Xs Max 全网通 苹果',
      price: 8599,
      num: 10000,
      span: ['智能机销量前十', '顺丰包邮']
    }
  ]
})

export default (state = defaultState, action) => {
  if (action.type == actionTypes.CHANGE) {
    return state.set('data', 'change Redux!!!')
  }
  return state
}
