<template>
  <div class="hello">
    bbbbbbbb

  </div>
</template>

<script lang="ts">
import { defineComponent,toRefs,reactive } from "vue";
import { useCounterStore } from '@/store/counter'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: "b",
  props: {
    msg: String,
  },
  setup(){
    const state = useCounterStore()
    const add = ()=>{
      state.getAsync()
    }
    const data=reactive({
      a:111
    })
    const route = useRoute()
    console.log(route.query.id);//999
    return {
      ...toRefs(state),
      add,
      data
    }
  },
  components:{
  }



});
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
