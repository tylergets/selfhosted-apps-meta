<template>
  <div clas="mb-4">
    <div class="my-4 font-bold text-xl">{{title}}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: {}
  }
}
</script>

<style scoped>

</style>