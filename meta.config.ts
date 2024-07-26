export interface Project {
  title: string
  details: string
}
interface Config {
  name: string
  connection: string
  links?: {
    icon: string
    value: string
    url?: string
  }[]
  introduce: string
  companies: {
    name: string
    time: string
    projects: {
      name: string
      situation: Project
      task: Project
      actions?: Project[]
      result?: Project
    }[]
  }[]
  projects: Project[]
  skills: string[]
  educations: {
    time: string
    school: string
    profession: string
    lv: string
  }[]
}

const config: Config = {
  // 名字
  name: 'Lin Zheng',
  // 联系方式
  connection: '( wx: linzheng-99 )',
  links: [
    {
      icon: 'location',
      value: 'WenZhou'
    },
    {
      icon: 'weixin',
      value: 'linzheng-99'
    },
    {
      icon: 'email',
      value: 'linzheng9045@gmail.com'
    },
    {
      icon: 'github',
      value: 'GitHub',
      url: 'https://github.com/linzheng99'
    }
  ],
  // 个人介绍
  introduce: '对前端开发充满热情，保持对新技术的好奇和学习热情，愿意投入时间和精力研究与应用最新技术，提升自己。严格遵循代码规范和最佳实践，确保代码的可读性、可维护性和可靠性。注重用户体验设计。重视团队合作和沟通，善于与同事分享知识和经验，共同解决问题。在项目中积极主动地承担任务，及时反馈问题和进展。',
  // 公司
  companies: [
    {
      name: '融威科技有限公司',
      time: '2021年6月 - 2024年7月',
      projects: [
        {
          name: '物联网管理平台',
          situation: {
            title: '背景',
            details: '随着物联网（IOT）技术的迅速普及，越来越多的设备和传感器被联网，产生了大量的数据。用户需要一个高效的管理平台来统一管理这些设备。所以需要一个平台提供了对设备的管理、实时状态的监控、数据的分析展示以及设备异常的报警通知功能。通过这些功能，我们希望为用户提供高效、便捷的物联网设备管理体验，提升设备操作效率和数据管理能力。'
          },
          task: {
            title: '任务',
            details: '独自负责前端开发，设计和实现所有功能，确保用户界面友好和高效。我与UI设计师紧密合作，确保界面视觉效果一致且吸引人。同时，我确保后台能够正确处理和存储用户的数据，并与后端团队密切合作，保证数据的准确性和系统的稳定性。'
          },
          actions: [
            {
              title: '技术选型',
              details: '项目使用 Vite 作为开发和生产构建的工具，核心框架为 Vue3，使用 TypeScript 进行类型安全的开发，并搭配 Naive UI 作为 UI 组件库，采用 Pinia 进行状态管理，辅助工具包括 axios、dayjs、lodash等等实用工具库，确保开发效率和代码质量。'
            },
            {
              title: '开发',
              details: '对 Naive UI组件库进行二次封装；项目涉及到对设备的定位管理，使用高德开放平台的 地图JSAPI，对高德地图进行二次封装；减少重复开发，提升开发速度。'
            },
            {
              title: '反馈与优化',
              details: '在内部测试阶段收集用户反馈，并根据反馈进行优化和调整。'
            }
          ],
          result: {
            title: '结果',
            details: '物联网管理平台能够为用户提供高效、便捷的物联网设备管理体验，提升设备操作效率和数据管理能力。'
          }
        },
        {
          name: '数字龙舟智控平台',
          situation: {
            title: '背景',
            details: '随着社会经济的发展和健康生活方式的追求，龙舟活动从传统节日拓展至日常运动，但安全隐患增加。为了推动龙舟运动有序发展、提高安全性、推广龙舟文化，我们提出建设数字龙舟智控平台。该平台利用公安视频监控、RFID感应和移动端定位技术，实现龙舟活动的实时监控与精密管理，确保各乡镇社区的规范管理和安全监督。'
          },
          task: {
            title: '任务',
            details: '参与业务开发将设计师提供的UI设计稿精准地实现为高质量的前端页面，确保界面美观和用户体验良好；与后端团队紧密合作，通实现前后端数据交互，确保数据的正确传递和动态渲染，使应用功能全面。'
          },
          actions: [
            {
              title: '技术选型',
              details: '项目使用 Vite 作为开发和生产构建的工具，核心框架为 Vue3，使用 TypeScript 进行类型安全的开发，并基于 uni-app 进行微信小程序开发。UI 组件库采用 uView Plus，状态管理使用 Pinia，使用 Unocss 进行原子化 CSS 处理，确保开发效率和代码质量。'
            },
            {
              title: '开发',
              details: '对 uView Plus UI组件库进行二次封装，减少重复开发，提升开发速度；将功能模块化，便于独立开发和测试，提高代码的可维护性；'
            },
            {
              title: '反馈与优化',
              details: '在内部测试阶段收集用户反馈，并根据反馈进行优化和调整。'
            }
          ],
          result: {
            title: '结果',
            details: '数字龙舟智控平台不仅提升了龙舟活动的安全性和管理水平，还推动了龙舟文化的传播和全民参与，取得了社会和文化效益的双重提升。'
          }
        },
        // {
        //   name: '智慧社区矫正一体化管理平台',
        //   situation: {
        //     title: '背景',
        //     details: '实现龙舟档案采集、龙舟号牌赋码等能力，实现传统龙舟、健身龙舟的专项档案管理。明确一舟一长制度，动态更新信息，由各乡镇街布置到具体村居社区，通过移动端便捷应用落实在线采集或申报'
        //   },
        //   task: {
        //     title: '任务',
        //     details: '321'
        //   },
        //   actions: [
        //     {
        //       title: '任务',
        //       details: '321'
        //     }
        //   ],
        //   result: {
        //     title: '结果',
        //     details: '1123'
        //   }
        // },
      ]
    },
    {
      name: '杭州促极科技有限公司',
      time: '2020年9月 - 2021年3月',
      projects: [
        {
          name: 'CJDropshipping',
          situation: {
            title: '背景',
            details: '国内外电商平台，合作对接数千家制造商，以工厂价格采购产品，轻松将产品快速上架到您的店铺。尽享批发功能、预订库存、质量检查、全球仓库履行和高效交付服务。免安装费、免月费，免最低订单量。'
          },
          task: {
            title: '任务',
            details: '项目的功能迭代，BUG修复，功能优化，页面美化等'
          },
          actions: [
            {
              title: '技术选型与开发',
              details: '使用 React 及 Angular 对任务进行开发'
            }
          ],
          result: {
            title: '结果',
            details: '平台不仅提升了产品采购和销售的便捷性，还确保了高质量的服务和成本效益，吸引了更多用户加入并使用该电商平台。'
          }
        }
      ]
    },
  ],
  // 个人开源项目
  projects: [
    {
      title: 'tob后台管理项目',
      details: 'XXXXXX'
    },
    {
      title: '地图组件库',
      details: 'XXXXXX'
    }
  ],
  // 技能
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue3/2', 'React', 'Vite', 'Webpack', 'Unocss/Tailwind Css', 'Eslint', 'Nodejs', 'Git', 'uni-app'],
  // 教育经历
  educations: [
    {
      time: '2017年 ~ 2020年',
      school: '浙江长征职业技术学院',
      profession: '计算机应用技术',
      lv: '专科'
    }
  ]
}

export default config 
