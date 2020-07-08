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
                name: 'addHouseIssue',
                path: '/add-house-issue',
                component: () => import('../pages/forms/AddHouseIssue.vue')
            },
            {
                name: 'addAnnouncement',
                path: '/add-announcement',
                component: () => import('../pages/forms/AddAnnouncement.vue')
            },
            {
                path: '/houseissues',
                component: () => import('../pages/HouseIssues.vue')
            }
        ]
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('layouts/ProfileLayout.vue'),
        children: [{ path: '', component: () => import('pages/Profile.vue') }]
    },
    {
        path: '/myHomestay',
        name: 'myHomestay',
        component: () => import('layouts/GeneralLayout.vue'),
        children: [
            { path: '', component: () => import('pages/MyHomestay.vue') }
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
        path: '/editProfile',
        component: () => import('layouts/GeneralLayout.vue'),
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
