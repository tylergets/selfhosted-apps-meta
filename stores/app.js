import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        comments: true
    }),
    actions: {
        toggleComments() {
            this.comments = !this.comments
        }
    }
})