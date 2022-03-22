<template>
  <div id="main" style="width: 400px; height: 400px"></div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, ref } from "vue";
import { useCounterStore } from "@/store/counter";
import { useRoute } from "vue-router";
import { login } from "@/service/home";
import * as echarts from "echarts";

export default defineComponent({
  setup() {
    const state = reactive({
      hello: "hi zhangsan",
      title: "我是title",
    });
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>(["1"]);

    onMounted(async () => {
      const p = await login({ username: "12312", password: "2311" });
      state.title = p.data.username;

      // 基于准备好的dom，初始化echarts实例
      const dom: any = document.getElementById("main");
      const myChart = echarts.init(dom);

      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [15, 20, 36, 10, 10, 20],
          },
          {
            name: "价格",
            type: "bar",
            data: [51, 210, 326, 110, 140, 210],
          },
        ],
      });
    });

    function handleTab() {
      //   ElMessage("this is a message.");
    }

    return {
      ...toRefs(state),
      handleTab,
      collapsed,
      selectedKeys,
    };
  },
  components: {},
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
