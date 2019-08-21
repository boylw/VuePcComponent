import Vue from 'vue'
import Vuex from 'vuex'
import dialog from './dialogState';
import frame from './frameState.js';
Vue.use(Vuex)

// 弹窗状态
console.log('====================================');
console.log(frame);
console.log('====================================');

const stroe = new Vuex.Store({
  modules: {
    dialog,
    frame
  }
})


export default stroe