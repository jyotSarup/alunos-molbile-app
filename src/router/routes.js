const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [{ path: "", component: () => import("pages/Index.vue") }]
    },
    {
        path: "/profile",
        component: () => import("layouts/MainPageLayout.vue"),
        children: [{ path: "", component: () => import("pages/Profile.vue") }]
    },
    {
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            { path: "", component: () => import("pages/auth/Login.vue") }
        ]
    },
    {
        path: "/homestay",
        component: () => import("pages/Homestay.vue"),
        children: [{ path: "", component: () => import("pages/Homestay.vue") }]
    },
    {
        path: "/homestay/myhomestay",
        component: () => import("pages/MyHomestay.vue"),
        children: [
            { path: "", component: () => import("pages/MyHomestay.vue") }
        ]
    },
    {
        path: "/homestay/houseissues",
        component: () => import("pages/HouseIssues.vue"),
        children: [
            { path: "", component: () => import("pages/HouseIssues.vue") }
        ]
    },
    {
        path: "/homestay/rules",
        component: () => import("pages/Rules.vue"),
        children: [{ path: "", component: () => import("pages/Rules.vue") }]
    }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
    routes.push({
        path: "*",
        component: () => import("pages/Error404.vue")
    });
}

export default routes;
