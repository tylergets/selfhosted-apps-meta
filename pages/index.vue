<template>
  <div class="flex justify-center mt-4 mb-6 flex-col items-center gap-4">
    <h1 class="text-3xl">Self Hosted App Metadata</h1>
    <p>The purpose of this project is to maintain a <a href="https://github.com/tylergets/selfhosted-apps-meta/blob/main/meta/interfaces/interfaces.d.ts#L38" class="link">consistent schema</a> for many self hosted apps.</p>
    <p>It can be used for creating "app stores", generating docker-compose configurations, building alternative configuration tools, etc.</p>
  </div>
  <div class="flex justify-center gap-4">
    <nuxt-link to="/apps" class="btn">View All Apps</nuxt-link>
    <a href="https://github.com/tylergets/selfhosted-apps-meta" target="_blank" class="btn">View Github</a>
  </div>
  <div>
    <div class="mt-4 mb-2">
      <h2 class="text-xl">FAQ</h2>
    </div>
    <div v-for="question in faq" class="my-4">
      <div class="font-bold">{{question.question}}</div>
      <div>{{question.answer}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      faq: [
        {
          question: 'Why not just use docker-compose?',
          answer: 'Docker-compose is perfect for running applications, but its schema is missing information necessary to fully run the application. This includes information required for reverse proxies, dashboards, database setup, etc. The good thing is our schema can be used to generate docker-compose files.'
        },
        {
          question: 'How to use it?',
          answer: 'If you are a developer, get involved with the project on Github. If you are a user, you can browse the data to create a configuration for your own server.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>