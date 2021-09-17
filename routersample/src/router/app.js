export default [
    {
        name: "dashboard",
        path: "/dashboard",
        component: () => import('@/views/apps/dashboard.vue')
    },
    {
        name: "profile",
        path: "/profile",
        component: () => import('@/views/apps/profile.vue')
    },
]
