/**
 * 站点所有文案与数据都集中在这里。
 * 改这个文件就够了，组件不需要动。
 *
 * 标了 TODO 的地方就是需要你替换的占位内容。
 */
export const profile = {
  // TODO: 换成你的名字 / 昵称
  name: '你的名字',
  handle: '@LuoKLuangquan',

  // TODO: 身份标签，会显示在名字下方的小胶囊里
  role: 'AI 应用开发者 · 独立构建者',

  // TODO: 首屏的一句话，尽量短、有记忆点
  slogan: '把想法写成代码，把代码变成能用的 AI 产品。',

  // 头像：把图片放到 public/avatar.png，这里写 '/avatar.png'；留空则显示名字首字。
  avatar: '',

  // TODO: 2–4 段自我介绍，每段一句话到三句话
  bio: [
    '我是谁：这里写一段 30–60 字的自我介绍，说明你现在在做什么、关注什么方向。',
    '我做过什么：写一段关于你的经历、项目或研究，最好带一点具体成果（数字、上线产品、论文、竞赛）。',
    '我想做什么：写一段你的目标或正在寻找的机会，比如合作、实习、开源项目。',
  ],

  // TODO: 三个数字，用来快速建立印象（可删）
  stats: [
    { value: '3+', label: '年工程经验' },
    { value: '12', label: '个上线项目' },
    { value: '∞', label: '次调试到凌晨' },
  ],

  // TODO: 技能关键词，level 0–100 只影响进度条长度，可随意
  skills: [
    { name: 'React / TypeScript', level: 90 },
    { name: 'Python / FastAPI', level: 82 },
    { name: 'LLM 应用与 RAG', level: 78 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: '产品设计与原型', level: 65 },
  ],

  // TODO: 2–5 个项目，link 可留空
  projects: [
    {
      title: '项目名称一',
      desc: '一句话说明它解决什么问题、你的角色、结果如何。',
      tags: ['React', 'LLM'],
      link: '',
    },
    {
      title: '项目名称二',
      desc: '一句话说明它解决什么问题、你的角色、结果如何。',
      tags: ['Python', 'RAG'],
      link: '',
    },
    {
      title: '项目名称三',
      desc: '一句话说明它解决什么问题、你的角色、结果如何。',
      tags: ['开源'],
      link: '',
    },
  ],

  // TODO: 联系方式，href 支持 mailto: / https://
  contacts: [
    { label: 'GitHub', value: '@LuoKLuangquan', href: 'https://github.com/LuoKLuangquan' },
    { label: '邮箱', value: 'you@example.com', href: 'mailto:you@example.com' },
    { label: '微信', value: 'your-wechat-id', href: '' },
  ],
}
