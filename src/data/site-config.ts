export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '南江',
    subtitle: '不企图留下多少价值的个人杂记',
    description: '关于自我、生活的记录与思考',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
//        {
//            text: 'Terms',
//            href: '/terms'
//        },
//        {
//            text: 'Download theme',
//            href: 'https://github.com/JustGoodUI/dante-astro-theme'
//        }
    ],
    socialLinks: [
//        {
//           text: 'Dribbble',
//            href: 'https://dribbble.com/'
//        },
//        {
//            text: 'Instagram',
//            href: 'https://instagram.com/'
//        },
//        {
//            text: 'X/Twitter',
//            href: 'https://twitter.com/'
//        }
    ],
    hero: {
        title: '我尝试着，在这里讲述自己的经历与感受。',
        text: "我叫 **南江**。我无知，没有什么知识拿来讲述；我漫无目的，没有什么故事值得说道。 对于写博客，我没有材料的累积，我想，我只能研究研究自己。大多数时候，我活的太过自我，只有某些时刻会想象我死后的世界。假如我死后，人生如一部电影一样重映，我会给电影取什么名字，我将如何用一句话介绍她？",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
