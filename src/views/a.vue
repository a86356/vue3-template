<template>
  <div class="hello">
    {{ msg }}
    {{ count }}

    <button @click="add">add</button>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed } from "vue";
import useEffect from "@/hooks/useEffect";
import { useCounterStore } from "@/store/counter";
import { useRouter } from "vue-router";

const state = useCounterStore();
const msg = computed(() => state.msg);
const count = computed(() => state.count);

const data = toRefs(state);
const route = useRouter();

useEffect(() => {
  state.getAsync();
}, [data.count]);

const add = () => {
  state.increment();
  route.push({
    path: "/b",
    query: {
      id: 666,
    },
  });
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
