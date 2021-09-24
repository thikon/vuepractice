export default [
    {
        name: "dashboard",
        path: "/dashboard",
        component: () => import('@/views/apps/dashboard.vue')
    },
    {
        name: "posts",
        path: "/posts",
        component: () => import('@/views/apps/posts.vue')
    },
    {
        name: "posts",
        path: "/posts/:id",
        component: () => import('@/views/apps/posts.vue')
    },
]
