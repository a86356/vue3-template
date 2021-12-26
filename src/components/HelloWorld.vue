<template>
  <div class="hello">
    {{count}}
    <button @click="add" class="ml25">add</button>
    {{namelength}}
    {{data.a}}
    <DatePicker/>

  </div>
</template>

<script lang="ts">
import { defineComponent,toRefs,reactive } from "vue";
import { useCounterStore } from '@/store/counter'
import { DatePicker } from 'ant-design-vue';
export default defineComponent({
  name: "HelloWorld",
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

    return {
      ...toRefs(state),
      add,
      data
    }
  },
  components:{
    DatePicker
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
