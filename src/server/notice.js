import WNotice from '../components/baseComponent/w-notice.vue';
import Vue from 'vue'

WNotice.getInstance =props => {
    const newV = new Vue({
      render(h) {
          return h(WNotice,{props});
      },  
    }).$mount();

    // 将真实Dom挂载在Body上
    document.body.append(newV.$el);
    return newV.$children[0];
}

let onlyOne = null;
function instance(props) { 
    onlyOne = onlyOne || WNotice.getInstance(props);
    return onlyOne
}

export default {
    notice(props) {
        let visdOM = instance(props)
        visdOM.initNewType(); // 让它出现
        visdOM.closeNoticeNew(); // 自动关闭
    }
}