import {defineUserConfig} from 'vuepress';
import theme from './theme';

export default defineUserConfig({
    lang: 'zh-CN',
    dest: './dist',
    title: 'IDEA 高效使用指南',
    description: 'vuepress-theme-hope 的演示',

    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: '//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css',
            },
        ],
    ],

    theme,
});
