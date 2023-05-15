import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome", //應用名稱，可以隨便取名
  app: () => //當路徑匹配時，執行這個方法
    System.import( // 加載一個遠程模塊，而這個模塊會暴露三個hooks--- bootstrap, mount, unmount
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location=>location.pathname == "/",
});

// 註冊新應用；本質就是透過路徑的不同來動態請求模塊
registerApplication({
  name: "@single-spa/vue-app",
  app: () => System.import("@test-single-spa/vue-app"),
  activeWhen: ["/vue"],
  customProps: { a: 1 } // 客制傳參，也可以是store、發布訂閱等等
});

registerApplication({
  name: "@single-spa/react-app",
  app: () => System.import("@test-single-spa/react-app"),
  activeWhen: ["/react"],
  customProps: { a: 1 } 
});


// registerApplication({
//   name: "@test-single-spa/navbar",
//   app: () => System.import("@test-single-spa/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
