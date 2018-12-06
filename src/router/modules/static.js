const staticRouterMap = [
  {
    path: "",
    name: "",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Login/Login.vue")
  },
  // 暂时放到静态路由下面，后期接口调通之后根据权限动态添加到动态路由中
  {
    path: "/wchat",
    name: "wchat",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Layout/Layout.vue")
  }
];

export default staticRouterMap;
