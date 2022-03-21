import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import A from "@/views/a.vue";
import B from "@/views/b.vue";

const routes = [
  { path: "/about", component: HelloWorld },
  { path: "/", component: B },
  { path: "/a", component: A },
  { path: "/b", component: B },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
