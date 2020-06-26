const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/Index.vue')}
        ]
    },
    {
        path: '/auth',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
            {path: '', component: () => import('pages/auth/Login.vue')}
        ]
    },
    {
        path:'/add-house-issue',
        component:() => import('../pages/forms/AddHouseIssue.vue')
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
