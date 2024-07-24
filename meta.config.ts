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
            details: '实现龙舟档案采集、龙舟号牌赋码等能力，实现传统龙舟、健身龙舟的专项档案管理。明确一舟一长制度，动态更新信息，由各乡镇街布置到具体村居社区，通过移动端便捷应用落实在线采集或申报'
          },
          task: {
            title: '任务',
            details: '321'
          },
          actions: [
            {
              title: '需求分析',
              details: '321'
            },
            {
              title: 'UI设计',
              details: '321'
            }
          ],
          result: {
            title: '结果',
            details: '1123'
          }
        },
        {
          name: '智慧社区矫正一体化管理平台',
          situation: {
            title: '背景',
            details: '实现龙舟档案采集、龙舟号牌赋码等能力，实现传统龙舟、健身龙舟的专项档案管理。明确一舟一长制度，动态更新信息，由各乡镇街布置到具体村居社区，通过移动端便捷应用落实在线采集或申报'
          },
          task: {
            title: '任务',
            details: '321'
          },
          actions: [
            {
              title: '任务',
              details: '321'
            }
          ],
          result: {
            title: '结果',
            details: '1123'
          }
        },
        {
          name: '数字龙舟(小程序)',
          situation: {
            title: '背景',
            details: '实现龙舟档案采集、龙舟号牌赋码等能力，实现传统龙舟、健身龙舟的专项档案管理。明确一舟一长制度，动态更新信息，由各乡镇街布置到具体村居社区，通过移动端便捷应用落实在线采集或申报。'
          },
          task: {
            title: '任务',
            details: '321'
          },
          actions: [
            {
              title: '任务',
              details: '321'
            }
          ],
          result: {
            title: '结果',
            details: '1123'
          }
        }
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
            details: '国内外电商平台，合作对接数千家制造商，以工厂价格采购产品，轻松将产品快速上架到您的店铺。尽享批发功能、预订库存、质量检查、全球仓库履行和高效交付服务。免安装费、免月费，免最低订单量'
            // details: '公司使用 React 及 Angular 框架,公司主要项目经营国内外电商pc平台，熟悉电商订单区域的业务逻辑,参与过功能开发，BUG修复，功能优化，页面美化等'
          },
          task: {
            title: '任务',
            details: '我的任务是功能迭代，BUG修复，功能优化，页面美化等'
          },
          actions: [
            {
              title: '开发',
              details: '使用 React 及 Angular 对任务进行开发'
            }
          ]
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
  skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue3/2', 'React', 'Vite', 'Webpack', 'Unocss/Tailwind Css', 'Nodejs'],
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
