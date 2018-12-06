import router from "./index";
import Cookies from "js-cookie";
router.beforeEach((to, from, next) => {
  if (Cookies.get("Token")) {
    if (to.path === "/login") {
      next({ name: "wchat" });
    } else {
      next();
    }
  } else {
    if (to.name === "login") {
      next();
    } else {
      next({ name: "login" });
    }
  }
});
