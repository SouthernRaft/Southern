import{Er as e,Rn as t,_t as n,an as r,ct as i,fn as a,lt as o,sn as s,yr as c}from"./framework.DrTFjOV9.js";import{n as l}from"./theme.Cw2gflas.js";import"./chunks/vue-i18n.F4GInqby.js";import{a as u,i as d}from"./chunks/vue-router.ByFI7K-U.js";var f={__name:`第一篇`,setup(f,{expose:p}){let m=c(JSON.parse(`{"title":"我的第一篇文章","description":"","frontmatter":{"title":"我的第一篇文章","date":"2026-03-26","tags":["生活","技术"],"categories":"随笔"},"headers":[],"relativePath":"pages/posts/第一篇.md","lastUpdated":1774528775000}`)),h=u(),g=d(),_=Object.assign(g.meta.frontmatter||{},m.value?.frontmatter||{});return h.currentRoute.value.data=m.value,s(`valaxy:frontmatter`,_),globalThis.$frontmatter=_,p({frontmatter:{title:`我的第一篇文章`,date:`2026-03-26`,tags:[`生活`,`技术`],categories:`随笔`}}),(s,c)=>{let u=l;return r(),o(u,{frontmatter:e(_)},{"main-content-md":t(()=>[...c[0]||=[i(`p`,null,`正文内容…`,-1),i(`div`,{class:`language-`},[i(`button`,{title:`Copy code`,class:`copy`}),i(`span`,{class:`lang`}),i(`pre`,{class:`shiki shiki-themes github-light github-dark vp-code`},[i(`code`,{"v-pre":``},[i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`### 🎨 个性化定制区`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`| 目录/文件 | 作用 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`|---|---|`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `components/` | 自定义 Vue 组件，可以覆盖主题默认组件 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `styles/` | 自定义 CSS/SCSS 样式，覆盖主题样式 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `layouts/` | 自定义页面布局模板 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `public/` | 静态资源，放头像、图片等，直接通过 `/文件名` 访问 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`### ⚙️ 核心配置文件`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`| 文件 | 作用 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`|---|---|`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `valaxy.config.ts` | **最重要的配置文件**，配置博客标题、作者、主题、插件、导航栏等 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `site.config.ts` | 站点基础信息配置（部分版本与 valaxy.config.ts 合并） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `package.json` | 项目依赖和脚本命令 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`### 🌐 多语言`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`| 目录 | 作用 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`|---|---|`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `locales/en.yml` | 英文语言包 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `locales/zh-CN.yml` | 中文语言包 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`### 📦 构建输出（不要提交）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`| 目录 | 作用 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`|---|---|`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `dist/` | 构建后的静态文件，部署到服务器的就是这里 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`### 🚀 部署相关`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`| 文件 | 作用 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`|---|---|`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `netlify.toml` | Netlify 部署配置 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `vercel.json` | Vercel 部署配置 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `Dockerfile` | Docker 部署配置 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,"| `nginx.conf` | Nginx 服务器配置 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,null,`## 你平时的工作流`)])])]),i(`button`,{class:`code-block-unfold-btn`})],-1),i(`p`,null,`日常写文章 → pages/posts/ 下新建 .md 文件 改博客信息 → valaxy.config.ts（标题、头像、社交链接） 改样式外观 → styles/ 目录 加自定义组件 → components/ 目录 放图片资源 → public/ 目录`,-1)]]),"main-header":t(()=>[a(s.$slots,`main-header`)]),"main-header-after":t(()=>[a(s.$slots,`main-header-after`)]),"main-nav":t(()=>[a(s.$slots,`main-nav`)]),"main-content-before":t(()=>[a(s.$slots,`main-content-before`)]),"main-content":t(()=>[a(s.$slots,`main-content`)]),"main-content-after":t(()=>[a(s.$slots,`main-content-after`)]),"main-nav-before":t(()=>[a(s.$slots,`main-nav-before`)]),"main-nav-after":t(()=>[a(s.$slots,`main-nav-after`)]),comment:t(()=>[a(s.$slots,`comment`)]),footer:t(()=>[a(s.$slots,`footer`)]),aside:t(()=>[a(s.$slots,`aside`)]),"aside-custom":t(()=>[a(s.$slots,`aside-custom`)]),default:t(()=>[a(s.$slots,`default`)]),_:3},8,[`frontmatter`])}}};export{f as default};