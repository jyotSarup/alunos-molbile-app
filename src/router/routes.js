const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [{ path: "", component: () => import("pages/Index.vue") }]
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
        component: () => import("pages/Homestay.vue")
    },
    {
        path: "/homestay/myhomestay",
        component: () => import("pages/MyHomestay.vue")
    },
    {
        path: "/homestay/houseissues",
        component: () => import("pages/HouseIssues.vue")
    },
    {
        path: "/homestay/rules",
        component: () => import("pages/Rules.vue")
    },
    {
        path: "/homestay/rules",
        component: () => import("pages/Rules.vue")
    },
    {
        path: "/homestay/rules",
        component: () => import("pages/Rules.vue")
    },
    {
        path: "/help",
        component: () => import("pages/Help.vue")
    },
    {
        name: "help.emergency.call",
        path: "/help/emergency-call",
        component: () => import("pages/EmergencyCall.vue")
    },
    {
        name: "help.faqs",
        path: "/help/faqs",
        component: () => import("pages/Faqs.vue")
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
