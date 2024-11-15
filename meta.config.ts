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
  skillDetails: string[]
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
  introduce: '我对新技术特感兴趣，喜欢钻研新东西，提升自己的职业技能。我有良好且严格的编码习惯，确保代码的维护性和质量。注重用户体验，喜欢和团队一起合作，共同解决问题，分享经验。项目中，积极完成任务，及时汇报进展。希望能为团队贡献力量，一起做出好项目。',
  skillDetails: [
    '熟练掌握 Vue3 和 React，熟悉 TypeScript，拥有丰富的实践经验。',
    '熟悉 Webpack / Vite 等构建工具的基本配置，能够使用以上工具搭建通用的开发环境。',
    '熟练掌握 NestJs 并使用独立开发了一个后台管理系统。', // 包括但不限于 CURD 操作、中间件配置、模块化设计等
    '熟练掌握 NextJs 并使用独立开发了一个项目管理系统。', // 包括但不限于 CURD 操作、中间件配置、模块化设计等
    '熟悉 Eslint 基本配置和良好且严格的编码习惯。',
    '熟悉行业研发设计流程，具备协同开发、分支管理及项目配置的实践经验',
  ],
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
              details: '使用 Vite 和 Vue3 进行项目开发和构建：采用 TypeScript 实现类型安全的开发。'
            },
            {
              details: '使用 Element Plus 组件库，使用Pinia 进行状态管理。'
            },
            {
              details: '根据项目需求定制和二次封装 Element Plus 组件，提高开发效率，减少重复代码。'
            },
            {
              details: '通过 高德地图JSAPI 对实现设备定位相关功能，依赖 websocket 通信，实现定位数据同步更新。'
            },
            {
              details: '通过 Echarts 等可视化库进行设备管理的可视化大屏开发。'
            },
            // {
            //   details: '引入 axios、dayjs、lodash 等辅助工具库，提高开发效率和代码质量。'
            // },
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
              details: '使用 Vite 和 Vue3 开发构建，结合 TypeScript 和 uni-app 开发小程序。'
            },
            {
              details: '使用 uView Plus 组件库、Pinia 状态管理和 Unocss 原子化 CSS，提高开发效率和代码质量。'
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
      name: 'Next Track 轻量级项目管理平台',
      links: [
        {
          icon: 'link',
          value: 'Vercel 预览链接',
          url: 'https://next-track-ashy.vercel.app/'
        },
      ],
      situation: {
        title: '背景',
        details: '一个轻量级的项目管理平台，帮助开发者和团队更好地管理项目和任务。'
      },
      task: [
        {
          details: '构建一个现代化的项目管理平台。'
        },
        {
          details: '实现核心功能: 工作区管理、项目管理、任务跟踪、团队协作、数据分析。'
        }
      ],
      actions: [
        {
          details: '使用 NextJs + TypeScript 作为主框架。'
        },
        {
          details: '选择 Hono 处理 API 路由; 使用 Appwrite 作为后端服务。'
        },
        {
          details: '采用 Feature-First 方式，实现清晰的目录结构。'
        },
        {
          details: '使用 Tailwind CSS 实现响应式设计，确保良好的跨设备用户体验。'
        },
        {
          details: '实现实时数据分析和可视化功能，提供项目进度和效率分析'
        }
      ],
      result: {
        title: '结果',
        details: '这个项目不仅展示了现代化前端开发的最佳实践。为团队提供了一个实用的项目管理工具。通过合理的设计，成功构建了一个既易用又功能强大的协作平台。'
      }
    },
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
        details: '一个可维护性和可扩展性的前后端分离后台管理系统，服务管理不同角色和用户的权限。'
      },
      task: [
        {
          details: '开发一个简单高效的权限管理系统。'
        },
        {
          details: '实现核心功能: 用户、角色、权限、菜单以及常用组件的封装。'
        },
        {
          details: '达到以模板的形式快速开发启动项目。'
        },
      ],
      actions: [
        {
          details: '使用 Vite 作为构建工具，选择 Vue3 作为前端框架，结合 vue-router 实现路由管理。'
        },
        {
          details: '使用 Pinia 进行状态管理。封装 axios、Echarts、Naive UI 等库，扩展项目功能增加开发效率。'
        },
        {
          details: '集成 ESLint 进行代码质量检查和格式化，确保代码规范性。'
        },
        {
          details: '使用 NestJs 构建后端服务，基于 TypeORM 进行对 MySQL 数据库操作，'
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
  skills: [
    // 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue2', 'Vue3', 'React', 'Vite', 'Webpack', 'ESLint', 'NodeJs', 'Git', 'uni-app', '微信小程序', 'NestJs', 'NextJs', 'Vim'
  ],
  // 其他链接
  otherLinks: [
    {
      icon: 'github',
      value: 'GitHub: https://github.com/linzheng99',
      url: 'https://github.com/linzheng99'
    },
    // {
    //   icon: 'yuque',
    //   value: '语雀: https://www.yuque.com/linzheng99',
    //   url: 'https://www.yuque.com/linzheng99'
    // },
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
