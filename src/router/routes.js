const routes = [
    {
        path: '/',
        component: () => import('layouts/MainPageLayout.vue'),
        children: [
            { path: '', redirect: { name: 'auth.login' } },
            {
                name: 'feed',
                path: '/feed',
                component: () => import('../pages/Feed.vue')
            },
            {
                name: 'homestay',
                path: '/homestay',
                component: () => import('../pages/Homestay.vue')
            },
            {
                name: 'help',
                path: '/help',
                component: () => import('../pages/Help.vue')
            },
            {
                name: 'addAnnouncement',
                path: '/add-announcement',
                component: () => import('../pages/forms/AddAnnouncement.vue')
            },
            // {
            //     name: 'memberProfile',
            //     path: '/memberProfile/:memberIndex',
            //     component: () => import('../pages/MemberProfile.vue')
            // },
            {
                name: 'feedback',
                path: '/feedback',
                component: () => import('../pages/Feedback.vue')
            },
            {
                name: 'feedbackQuestions',
                path: '/feedback-questions',
                component: () => import('../pages/FeedbackMain.vue')
            }
        ]
    },
    {
        name: 'memberProfile',
        path: '/memberProfile/:memberIndex',
        component: () => import('../pages/MemberProfile.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('layouts/ProfileLayout.vue'),
        children: [{ path: '', component: () => import('pages/Profile.vue') }]
    },
    {
        path: '/',
        component: () => import('layouts/GeneralLayout.vue'),
        children: [
            {
                name: 'myhomestay',
                path: '/myHomestay',
                component: () => import('pages/MyHomestay.vue')
            },
            {
                name: 'houseissues',
                path: '/houseissues',
                component: () => import('../pages/HouseIssues.vue')
            },
            {
                name: 'addHouseIssue',
                path: '/add-house-issue',
                component: () => import('../pages/forms/AddHouseIssue.vue')
            }
        ]
    },
    {
        path: '/auth',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/auth/Login.vue'),
                name: 'auth.login'
            }
        ]
    },
    {
        path: '/editprofile',
        component: () => import('layouts/SavePageLayout.vue'),
        children: [
            { path: '', component: () => import('pages/EditProfile.vue') }
        ]
    },

    {
        name: 'camera',
        path: '/camera',
        component: () => import('components/UpdatePhoto/Camera.vue')
    }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    });
}

export default routes;
