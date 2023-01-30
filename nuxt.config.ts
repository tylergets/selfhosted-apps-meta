// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: [
        '@pinia/nuxt',
        '@nuxt/content'
    ],
    app: {
        baseURL: '/selfhosted-apps-meta/',
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
