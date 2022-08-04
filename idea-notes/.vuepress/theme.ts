import {hopeTheme} from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default hopeTheme({
    logo: '/logo.svg',
    hostname: 'https://codingdocs.github.io',
    repo: 'CodingDocs/awesome-idea',
    docsDir: 'idea-notes',
    iconPrefix: 'iconfont icon-',
    pure: true,
    author: {
        name: '努力的it小胖子',
        url: 'https://mrhope.site',
    },
    // 页面模式切换
    darkmode: 'switch',
    // 图片资源
    iconAssets: 'iconfont',
    // navbar 导航栏配置
    navbar: navbar,

    // sidebar，侧边栏配置
    sidebar: sidebar,
    // 显示下一页和上一页链接
    nextLink: true,
    prevLink: true,

    // 自定义页脚
    footer: '主题: <a href="https://vuepress-theme-hope.github.io/v2/">VuePress Theme Hope</a></br><a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2020015769号-1</a>',
    displayFooter: true,

    // 文章展示内容
    pageInfo: ['Author', 'Category', 'Tag', 'Date', 'Original', 'Word'],
    // 个人信息
    blog: {
        description: '一个前端开发者',
        intro: 'https://java努力的it小胖子.cn/about-the-author/',
        sidebarDisplay: 'mobile',
        medias: {
            Baidu: 'https://example.com',
            Bitbucket: 'https://example.com',
            Dingding: 'https://example.com',
            Discord: 'https://example.com',
            Dribbble: 'https://example.com',
            Email: 'https://example.com',
            Evernote: 'https://example.com',
            Facebook: 'https://example.com',
            Flipboard: 'https://example.com',
            Gitee: 'https://example.com',
            GitHub: 'https://example.com',
            Gitlab: 'https://example.com',
            Gmail: 'https://example.com',
            Instagram: 'https://example.com',
            Lines: 'https://example.com',
            Linkedin: 'https://example.com',
            Pinterest: 'https://example.com',
            Pocket: 'https://example.com',
            QQ: 'https://example.com',
            Qzone: 'https://example.com',
            Reddit: 'https://example.com',
            Rss: 'https://example.com',
            Steam: 'https://example.com',
            Twitter: 'https://example.com',
            Wechat: 'https://example.com',
            Weibo: 'https://example.com',
            Whatsapp: 'https://example.com',
            Youtube: 'https://example.com',
            Zhihu: 'https://example.com',
        },
    },

    // 加密
    encrypt: {
        // 局部加密
        config: {
            '/努力的it小胖子/encrypt.html': ['1234'],
        },
        //全局加密
        global: false,
    },
    plugins: {
        blog: {
            autoExcerpt: true,
        },
        feed: {
            json: true,
        },
        //网站地图
        sitemap: false,

        // 如果你不需要评论，可以直接删除 comment 配置，
        // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
        // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
        // comment: {
        //     /**
        //      * Using Giscus
        //      */
        //     provider: 'Giscus',
        //     repo: 'vuepress-theme-hope/giscus-discussions',
        //     repoId: 'R_kgDOG_Pt2A',
        //     category: 'Announcements',
        //     categoryId: 'DIC_kwDOG_Pt2M4COD69',

        //     /**
        //      * Using Twikoo
        //      */
        //     // provider: "Twikoo",
        //     // envId: "https://twikoo.ccknbc.vercel.app",

        //     /**
        //      * Using Waline
        //      */
        //     // provider: "Waline",
        //     // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        // },
        // 代码复制
        copyCode: {
            duration: 1000,
        },
        // 图片预览
        photoSwipe: false,
        // 搜索
        // 版权
        copyright: {
            global: true,
        },
        // md 增强
        mdEnhance: {
            enableAll: true,
            gfm: true,
            presentation: {
                plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
            },
        },
    },
});
