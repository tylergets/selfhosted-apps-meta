<template>
  <pre @click="copyToClipboard" class="whitespace-pre-wrap"><code ref="el" v-html="code"></code></pre>
  <div>
    <div class="text-xs cursor-pointer mt-1" @click="toggleComments">
      Toggle Comments
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import {useAppStore} from "~/stores/app";

export default {
  name: "HighlightJs",
  props: {
    code: {},
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.code);
    },
    toggleComments() {
      const store = useAppStore();
      store.toggleComments();
      this.$nextTick(() => {
        this.highlight();
      })
    },
    highlight() {
      const el = this.$refs.el;
      hljs.highlightElement(el);
    },
  },
  mounted() {
    this.highlight();
  }
}
</script>

<style scoped>

</style>