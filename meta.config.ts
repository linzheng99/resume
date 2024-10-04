export interface Project {
  title?: string
  details: string
}
export interface Link {
  icon: string
  value: string
  url?: string
}
interface Details {
  name: string
  is?: string
  links?: Link[]
  situation: Project
  task: Project[]
  actions?: Project[]
  result?: Project
}
interface Config {
  name: string
  connection: Link[]
  links?: Link[]
  introduce: string
  companies: {
    name: string
    time: string
    projects: Details[]
  }[]
  projects: Details[]
  skills: string[]
  otherLinks?: Link[]
  educations: {
    time: string
    school: string
    profession: string
    lv: string
  }[]
}

const config: Config = {
  // 名字
  name: '林王磊',
  // 联系方式
  connection: [
    {
      icon: 'weixin',
      value: '13868729045'
    },
    {
      icon: 'email',
      value: 'alidlg9045@126.com'
    },
    {
      icon: 'phone',
      value: '13868729045'
    },
  ],
  links: [
    {
      icon: 'location',
      value: 'WenZhou'
    },
    {
      icon: 'phone',
      value: '13868729045'
    },
    {
      icon: 'weixin',
      value: '13868729045'
    },
    {
      icon: 'email',
      value: 'alidlg9045@126.com'
    },
    {
      icon: 'github',
      value: 'GitHub',
      url: 'https://github.com/linzheng99'
    },
    // {
    //   icon: 'person',
    //   value: 'linzheng99.top',
    //   url: 'https://linzheng99.top'
    // }
  ],
  // 个人介绍
  introduce: '对新技术保持着浓厚的兴趣和学习热情，愿意投入时间和精力研究与应用最新技术，不断提升自己的能力。我严格遵循代码规范和最佳实践，确保代码的可读性、可维护性和可靠性。同时，我注重用户体验设计，重视团队合作与沟通，善于与同事分享知识和经验，共同解决问题。在项目中，我积极主动承担任务，及时反馈问题和进展。',
  // 公司
  companies: [
    {
      name: '融威科技有限公司',
      time: '2021/06 - 2024/07',
      projects: [
        {
          name: '物联网管理平台',
          is: '( PC )',
          situation: {
            title: '背景',
            details: '随着物联网（IOT）技术的普及，联网设备和传感器产生大量数据。用户需要一个平台统一管理设备，进行实时监控、数据分析展示和异常报警通知，提升设备操作效率和数据管理能力，提供高效便捷的管理体验。'
          },
          task: [
            {
              details: '独立负责前端开发，设计并实现所有功能，确保用户界面友好和高效。'
            },
            {
              details: '与UI设计师紧密合作，保证界面视觉效果一致且吸引人。'
            },
            {
              details: '与后端团队密切配合，确保数据处理准确、系统稳定。'
            }
          ],
          actions: [
            {
              details: '使用 Vite 和 Vue3 进行项目开发和构建：采用 TypeScript 实现类型安全的开发，使用 Naive UI 组件库，并结合 Pinia 进行状态管理。'
            },
            {
              details: '根据项目需求定制和优化 Naive UI 组件，提高开发效率，减少重复代码。'
            },
            {
              details: '通过 高德地图JSAPI 对实现设备定位相关功能，依赖 websocket 通信，实现定位数据同步更新。'
            },
            {
              details: '通过 Echarts 等可视化库进行设备管理的可视化大屏开发。'
            },
            {
              details: '引入 axios、dayjs、lodash 等辅助工具库，提高开发效率和代码质量。'
            },
          ],
          result: {
            title: '结果',
            details: '平台能够为用户提供高效、便捷的物联网设备管理体验，提升设备操作效率和数据管理能力。为内部人员解决效率问题。'
          }
        },
        {
          name: '数字龙舟智控平台',
          is: '( 微信小程序 )',
          situation: {
            title: '背景',
            details: '推广龙舟文化，举办龙舟活动。客户需要一个平台进行管理，利用视频监控、RFID感应和移动端定位技术，实现实时监控和精密管理。'
          },
          task: [
            {
              details: '负责项目中的大部分前端开发工作，从页面实现到与后端数据交互，确保项目顺利推进。'
            },
            {
              details: '将设计稿转化为高质量页面，优化交互和布局，提升用户体验。'
            },
          ],
          actions: [
            {
              details: '使用 Vite 和 Vue3 开发构建，结合 TypeScript 和 uni-app 开发小程序；采用 uView Plus 组件库、Pinia 状态管理和 Unocss 原子化 CSS，提高开发效率和代码质量。'
            },
            {
              details: '根据项目需求对 uView Plus 组件库进行二次封装，减少重复开发，提高开发效率。'
            },
            {
              details: '将功能模块化，实现独立开发和测试，提升代码的可维护性和扩展性。'
            },
          ],
          result: {
            title: '结果',
            details: '平台不仅提升了龙舟活动的安全性和管理水平，还推动了龙舟文化的传播和全民参与，取得了社会和文化效益的双重提升。'
          }
        },
      ]
    },
    {
      name: '杭州促极科技有限公司',
      time: '2020/09 - 2021/03',
      projects: [
        {
          name: 'CJDropshipping',
          is: '( PC )',
          situation: {
            title: '背景',
            details: '国内外电商平台，合作对接数千家制造商，以工厂价格采购产品，轻松将产品快速上架到店铺。尽享批发功能、预订库存、质量检查、全球仓库履行和高效交付服务。'
          },
          task: [
            {
              title: '任务',
              details: '项目的功能迭代，BUG修复，功能及页面的优化。'
            }
          ],
          actions: [
            {
              details: '使用 React 进行开发。'
            },
            {
              details: '与UI设计师紧密合作，保证界面视觉效果一致且吸引人。'
            },
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
      name: '基于 NestJs + Vue3 的后台管理系统',
      links: [
        {
          icon: 'link',
          value: '预览链接',
          url: 'http://118.31.0.102:3005/'
        },
      ],
      situation: {
        title: '背景',
        details: '基于 NestJS + TypeScript + TypeORM + Redis + MySQL + Vue3 + Naive UI 开发了一款简单高效的前后端分离后台管理系统。'
      },
      task: [
        {
          details: '开发一个简单高效的权限管理系统。用于管理不同角色和用户的权限，提升项目的可维护性和可扩展性。'
        },
        {
          details: '使用 NestJs 构建后端 API。使用 Vue3 开发前端界面。'
        }
      ],
      actions: [
        {
          details: '使用 Vite 作为构建工具，选用 Vue3 作为核心框架，结合 vue-router 实现路由管理。'
        },
        {
          details: '使用 Pinia 进行状态管理。封装 axios、Echarts、Naive UI 等库，以增强项目功能。'
        },
        {
          details: '集成 ESLint 进行代码质量检查和格式化，确保代码规范性。'
        },
        {
          details: '后端开发使用 NestJs 构建，基于 TypeORM 进行数据库操作，实现用户、角色、权限、菜单多表关联的查询及分页功能'
        },
        {
          details: '采用 VitePress 进行项目文档编写。'
        }
      ],
      result: {
        title: '结果',
        details: '成功搭建了一个功能完善的后台管理系统，易于扩展，可根据需求快速添加新功能和模块。通过使用 NestJS 了解后端开发的核心概念与技术，包括 API 架构设计、数据库操作、用户认证和授权等。'
      }
    },
  ],
  // 技能
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue2', 'Vue3', 'React', 'Vite', 'Webpack', 'ESLint', 'NodeJs', 'Git', 'uni-app', '微信小程序', 'NestJs', 'Vim'],
  // 其他链接
  otherLinks: [
    {
      icon: 'github',
      value: 'GitHub: https://github.com/linzheng99',
      url: 'https://github.com/linzheng99'
    },
    {
      icon: 'yuque',
      value: '语雀: https://www.yuque.com/linzheng99',
      url: 'https://www.yuque.com/linzheng99'
    },
  ],
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
