const routes = [
    {
        path: "/",
        component: () => import("layouts/MainPageLayout.vue"),
        children: [
            { path: "", redirect: { name: 'auth.login' } },
            {
                name: "feed",
                path: "/feed",
                component: () => import("../pages/Feed.vue")
            },
            {
                name: "addHouseIssue",
                path: "/add-house-issue",
                component: () => import("../pages/forms/AddHouseIssue.vue")
            },
            {
                name: "addAnnouncement",
                path: "/add-announcement",
                component: () => import("../pages/forms/AddAnnouncement.vue")
            },
            {
                path: "/homestay/houseissues",
                component: () => import("../pages/HouseIssues.vue")
            },
            {
                path: "/help",
                component: () => import("../pages/Help.vue")
            },
            {
                path: "/homestay",
                component: () => import("pages/Homestay.vue")
            }
        ]
    },
    {
        path: "/profile",
        component: () => import("layouts/ProfileLayout.vue"),
        children: [{ path: "", component: () => import("pages/Profile.vue") }]
    },
    {
        path: "/auth",
        component: () => import("layouts/AuthLayout.vue"),
        children: [
            { path: "", component: () => import("pages/auth/Login.vue"), name: 'auth.login' }
        ]
    },
    {
        path: "/profile/edit",
        component: () => import("layouts/GeneralLayout.vue"),
        children: [
            { path: "", component: () => import("pages/EditProfile.vue") }
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
        path: "/homestay/rules",
        component: () => import("pages/Rules.vue")
    },
    // {
    //     path: "/help",
    //     component: () => import("pages/Help.vue")
    // },
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
