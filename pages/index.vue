    <template>
      <div class="flex flex-col gap-2" v-if="!pending">
        <div>
          <div class="flex  gap-4 mb-2 justify-between">
            <div class="flex items-center gap-4">
              <label for="search">Search</label>
              <input type="text" class="border border-black" v-model="search">
            </div>
            <div>
              {{filteredApps.length}} / {{data.length}}
            </div>
          </div>
        </div>
        <div v-for="app in filteredApps">
          <nuxt-link :to="'/app/' + app.id">
            <div class="flex items-center gap-2">
              <img :src="app.icon" class="w-5 h-5">
              <div>
                {{app.name}} - <span class="text-gray-400">{{app.containers[0].image}}</span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </template>
    <script setup>
    const { data, pending } = await useAsyncData(() => queryContent('/apps').find());

    const search = ref('');

    const filteredApps = computed(() => {
      if (!search.value) {
        return data.value;
      }

      return data.value.filter((app) => {
        return app.name.toLowerCase().includes(search.value.toLowerCase());
      });
    });

    </script>