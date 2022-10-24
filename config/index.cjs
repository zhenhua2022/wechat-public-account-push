/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx068ae71002eb72ff',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0141c207525b78f0d0c15da1def6c950',

  PROVINCE: '广西',
  CITY: '桂林',
  
  USERS: [
    //ma
    {
      // 想要发送的人的名字
      name: '憨憨夏',
      
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNKGd5x4UCYEQ7YoiY0rw4dPAN-c',//user
      //id: 'oNKGd569zIxI6odnyJDSpgrjqgVo',//测试号
      
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      //useTemplateId: 'iR8HoABn-GIpr6SJ2c0wb3CCjmkbpOs0pkRlmoxoXWQ',
      useTemplateId: 'qJ2Ug59o75LDpU7S85MWtIP5v0Psv8M_4mjaOSC2Lyg',
      
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-22',
      horoscopeDateType: '今日',
      openUrl: 'https://s.weibo.com/top/summary?cate=realtimehot',
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-26' },
      ],
      
      courseSchedule:[
        // 周一
        [
          '08:00-10:10 有机化学(2) 理综楼402',
          '10:30-12:00 大学英语Ⅲ 理综楼405',
          '-----♥午休时间到，喏一个觉♥-----',
          '14:30-16:00 物理化学(1) 理综楼204',
          '19:30-21:50 大学物理实验A 数学楼403'
        ],
        // 周二
        [
          '08:00-09:20 生化与分子生物学 理综楼206',
          '09:30-12:00 马原 理综楼206',
          '-----♥午休时间到，喏一个觉♥-----',
          '14:30-16:00 仪器分析 理综楼404',
          '19:30-21:00 创新创业基础 理综楼104'
        ],
        // 周三
        [
          '08:00-09:20 有机化学(2) 理综楼402',
          '10:30-12:00 大学英语Ⅲ 文科楼',
          '-----♥午休时间到，喏一个觉♥-----',
          '14:30-16:50 电工与电子技术 理综楼505',
          '19:30-21:00 物理化学 理综楼204'
        ],
        // 周四
        [
          '08:00-09:20 公共体育(3) 育才田径棚',
          '09:30-12:00 大学物理(2) 理综楼307',
          '-----♥午休时间到，喏一个觉♥-----',
          '14:30-17:40 现代仪器分析实验',
          '19:30-21:50 生化与分子生物学 理综楼206'
        ],
        // 周五
        [
          '08:00-12:00 药物合成',
          '-----♥午休时间到，喏一个觉♥-----',
          '14:30-16:00 仪器分析 理综楼302'
        ],
        // 周六
        [
          '呀嘿，没课呦，快去找哥哥贴贴'
        ],
        // 周日
        [
          '呀嘿，没课呦，快去找哥哥亲亲'
        ]
      ]
    },
    //ma
    
  ],//users


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '7DZ0vrT5bcpHHKH3vntpRymlFEnRIxJtb-Vr2-zzTgs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNKGd569zIxI6odnyJDSpgrjqgVo',
    }
  ],

}

module.exports = USER_CONFIG

