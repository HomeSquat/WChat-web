import Vue from "vue";

Vue.config.productionTip = false;

Vue.prototype.globalClick = function (callback) {
  document.getElementById('app').onclick = function () {
    callback();
  };
};
