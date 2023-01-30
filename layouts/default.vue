<template>
  <div>
    <div class="bg-black text-white">
      <div class="px-4 py-2">
        <div class="flex justify-between">
          <NuxtLink to="/">
            Self Hosted Apps Meta
          </NuxtLink>
          <div @click="toggleComments">
            Toggle Comments
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {useAppStore} from "~/stores/app";

const store = useAppStore();

function toggleComments() {
  store.toggleComments();
}
</script>