<template>
  <div v-if="!pending">
    <div class="max-w-5xl mx-aut">
      <div class="flex items-center gap-10">
        <div class="w-full">
          <img class="h-24" :src="data.icon">
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

    <Section title="Portainer Stack">
      <highlight-js :code="portainerJson"/>
    </Section>

    <Section title="Complete Meta Data">
      <highlight-js :code="JSON.stringify(data, null, 4)"/>
    </Section>

  </div>
</template>

<script setup>
import {useDockerComposeTemplate} from "~/meta/docker/render/compose";
import Section from "~/components/Section.vue";
import {usePortainerTemplate} from "~/meta/docker/render/portainer";

const route = useRoute();
const { data, pending } = await useAsyncData(route.params.id, () => queryContent('/apps/' + route.params.id).findOne());

useHead({
  title: pending ? 'Loading' : data.value.name,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pending ? 'Loading': data.value.description
    }
  ]
});

const {yaml: composeYaml} = useDockerComposeTemplate(data);
const {template: portainerJson} = usePortainerTemplate(data);

</script>

<style scoped>

</style>