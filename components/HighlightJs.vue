<template>
  <pre @click="copyToClipboard" class="whitespace-pre-wrap"><code ref="el" v-html="code"></code></pre>
</template>

<script>
import hljs from "highlight.js";

export default {
  name: "HighlightJs",
  props: {
    code: {},
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.code);
    }
  },
  mounted() {
    const el = this.$refs.el;
    hljs.highlightElement(el);
  }
}
</script>

<style scoped>

</style>