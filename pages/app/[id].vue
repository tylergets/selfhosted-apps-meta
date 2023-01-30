<template>
  <div v-if="!pending">
    <div class="max-w-5xl mx-aut">
      <div class="flex items-center gap-10">
        <div>
          <img class="w-24 h-24" :src="data.icon">
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-3xl">{{data.name}}</div>
          <p>
            {{data.description}}
          </p>
          <div class="flex gap-2">
            <div v-for="link in data.links">
              <a target="_blank" :href="link.url" class="text-blue-500 underline">
                {{link.type}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Section title="Docker Compose">
      <highlight-js :code="composeYaml"/>
    </Section>

    <Section title="Complete Meta Data">
      <highlight-js :code="JSON.stringify(data, null, 4)"/>
    </Section>

  </div>
</template>

<script setup>
import {useDockerComposeTemplate} from "~/meta/docker/render/compose";
import Section from "~/components/Section.vue";

const route = useRoute();
const { data, pending } = await useAsyncData(route.params.id, () => queryContent('/apps/' + route.params.id).findOne());

useHead({
  title: data.value.name,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: data.value.description
    }
  ]
});

const {yaml: composeYaml} = useDockerComposeTemplate(data);

</script>

<style scoped>

</style>