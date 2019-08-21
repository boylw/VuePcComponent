
import Vue from 'vue';
import WAlert from '../components/baseComponent/w-alert.vue';

WAlert.getInstance = props => {
    const newV = new Vue({
        render(h) {
            return h(WAlert, {props})
        }
    }).$mount();

    // 2. 获取 alert组件实例,并将它挂载在Dom上
    document.body.append(newV.$el);
    return newV.$children[0];
}

function getInstanceAlert (props) {
    return WAlert.getInstance(props);
}

export default {
    alert(props) {
        let visDom  = getInstanceAlert(props);
        visDom.initNewType(); // 让它出现
    }
}